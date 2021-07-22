import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { Auth, API, graphqlOperation } from 'aws-amplify'
import { getUser } from './src/graphql/queries'

import { createUser } from './src/graphql/mutations'

import { withAuthenticator } from 'aws-amplify-react-native'

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)



function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

// run this snippet only when app is first mounted
useEffect( () => {
  const fetchUser = async () => {
      // get authenticated user from Auth
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true })
      console.log(userInfo)
      // get user from backend with the user id from auth info
        if(userInfo) {
          const userData = await API.graphql(
            graphqlOperation(
              getUser, 
              { id: userInfo.attributes.sub}
            )
          )

          if(userData.data.getUser) {
            console.log("User already registered")
            return
          }
          const newUser = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            imageUri:"",
            status:"Hey, am using wayaChat"

          }

          await API.graphql(
            graphqlOperation(
              createUser,
               { input: newUser}
            )
          )
            // if there is no user, then create new user with mutations

        }
  }
  fetchUser();
}, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App)

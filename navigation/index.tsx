/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Colors  from '../constants/Colors';
import { Octicons, MaterialCommunityIcons,Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'


import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import MainTabNavigator from './MainTabNavigator';
import ChatRoomScreen from '../screens/ChatRoom';
import ContactsScreen from '../screens/ContactsScreen';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
 


  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const onPress = () => {
    console.log("Search for users")
  }
  
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0
        }, 
        headerTintColor: Colors.light.background,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight:'bold'
        }
       
       }}>
      <Stack.Screen name="Root"
      options={{ 
        title: 'WayaChat',
        headerRight: () => (
          <View style={styles.icons}>
            <Octicons name="search" size={24} color={'white'} />
             <MaterialCommunityIcons name="dots-vertical" size={24} color={'white'} />
          </View>
        )
      }}
       component={MainTabNavigator} 
       />
        <Stack.Screen
           name="ChatRoom"
           component={ChatRoomScreen}
           options={({ route  }) => ({
             title: route.params.name,
              headerRight: () => (
                <View style={styles.icons}>
                 <FontAwesome5 name="video" size={24} color="white" />
                 <MaterialIcons name="call" size={24} color="white" />
                </View>
           )
           })}
           />


        <Stack.Screen
           name="Contacts"
           component={ContactsScreen}
           options={{
            headerRight: () => (
              <TouchableWithoutFeedback onPress={onPress}>
                   <View style={styles.icons}>
                     <Octicons name="search" size={24} color={'white'} />
                  </View>
              </TouchableWithoutFeedback>
             
             )
           }}
           />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
     icons: {
       flexDirection: 'row',
       width: 60,
       justifyContent: 'space-between',
       marginRight: 25
     },

     avatar:{
      width: 40,
      height:40,
      marginTop:4,
      borderRadius:100
  },
  arrow:{
    marginTop:10,
  }

})

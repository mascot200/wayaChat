/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View, StyleSheet } from 'react-native';
import Colors  from '../constants/Colors';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons'



import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import MainTabNavigator from './MainTabNavigator';

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
     }
})

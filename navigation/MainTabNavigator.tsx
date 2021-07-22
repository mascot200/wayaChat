/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 import { Ionicons } from '@expo/vector-icons';
 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import TabOneScreen from '../screens/ChatsScreen';
 import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';
 import { Fontisto } from '@expo/vector-icons'
import ChatsScreen from '../screens/ChatsScreen';
 const MainTab = createMaterialTopTabNavigator<MainTabParamList>();
 
 export default function MainTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <MainTab.Navigator
       initialRouteName="Chats"
       tabBarOptions={{ activeTintColor: Colors[colorScheme].background,
        style: { 
            backgroundColor: Colors[colorScheme].tint
        },

        indicatorStyle:{
            backgroundColor: Colors[colorScheme].background,
            height: 4
        },

        labelStyle:{
            fontWeight: 'bold'
        },
        showIcon: true,
       }}>
       
       <MainTab.Screen
         name="Camera"
         component={ChatsScreen}
         options={{
           tabBarIcon: ({ color }) => <Fontisto name="camera" size={20} color={color} />,
           tabBarLabel: () => null
        }}
       />

       <MainTab.Screen
         name="Chats"
         component={ChatsScreen}
       />


   
     </MainTab.Navigator>
   );
 }
 

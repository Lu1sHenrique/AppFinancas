import React from 'react';
import {
  TouchableOpacity
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome, Ionicons, Fontisto } from '@expo/vector-icons'

import Home from '../pages/Home';
import Profile from '../pages/Profile'
const Bottom = createBottomTabNavigator();

export default function RoutesFrota(){

  return (
      <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle:{
          borderTopColor: 'transparent',
          right: 10,
          backgroundColor: "#d21e2b",
          borderWidth: 1,
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          height: 80,
          paddingTop: 10
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle:{
          fontSize: 18,
          fontFamily: 'BebasNeue-Regular',
          paddingBottom: 10
        }
      }}
      >
      <Bottom.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home" color="#dadada" size={30} />
            ),
            tabBarAccessibilityLabel:"Home",
          }}
        />

      <Bottom.Screen 
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="user" color="#dadada" size={30} />
            ),
            tabBarAccessibilityLabel:"Profile",
          }}
        />

        <Bottom.Screen 
        name="Consultar"
        component={RelFrota}
        options={{
          tabBarIcon: ({ color }) => (
          <IconAntDesign name="search1" color={color} size={30} />
          ),
          tabBarAccessibilityLabel:"Relatório Frota",
          
        }}
        />

        <Bottom.Screen 
        name="Dashboard"
        component={RelDash}
        options={{
          tabBarIcon: ({ color }) => (
          <Icon name="pie-chart" color={color} size={30} />
          ),
          tabBarAccessibilityLabel:"Relatório Frota",
          
        }}
        />

        <Bottom.Screen 
        name="Inventário"
        component={InvFrota}
        options={{
          tabBarIcon: ({ color }) => (
          <Icon name="clipboard" color={color} size={30} />
          ),
          tabBarAccessibilityLabel:"Inventário Frota",
          tabBarButton: props => (
            <TouchableOpacity {...props} onPress={(showAlert)} />
          )
          }}
        />    
      </Bottom.Navigator>
  )
};




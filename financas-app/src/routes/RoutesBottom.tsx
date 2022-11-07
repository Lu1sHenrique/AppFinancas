import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons, Entypo, Octicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import AddBanks from '../pages/AddBanks';
import SelectPaymentAccount from '../pages/SelectPaymentAccount';

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
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
          paddingTop: 10
        },
        tabBarActiveTintColor: '#17B978',
        tabBarInactiveTintColor: '#fff',
        tabBarShowLabel:false
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
        name="SelectPaymentAccount"
        component={SelectPaymentAccount}
        options={{
          tabBarIcon: () => (
            <Octicons name="arrow-switch" color="#dadada" size={30} />
            ),
            tabBarAccessibilityLabel:"SelectPaymentAccount",
          }}
      />

      <Bottom.Screen 
        name="AddBanks"
        component={AddBanks}
        options={{
          tabBarIcon: () => (
            <Entypo name="plus" color="#dadada" size={40} />
            ),
            tabBarAccessibilityLabel:"AddBanks",
          }}
      />     
    </Bottom.Navigator>
  )
};



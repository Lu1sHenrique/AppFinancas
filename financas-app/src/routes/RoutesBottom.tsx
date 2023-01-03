import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons, Entypo, Octicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import AddBanks from '../pages/AddBanks';
import SelectPaymentAccount from '../pages/SelectPaymentAccount';
import colors from '../styles/colors';

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
          height: 75,
          paddingTop: 10
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel:false
      }}
      >
      <Bottom.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={[styles.containerButtonTab, {backgroundColor: focused ? colors.green : colors.white}]}>
              <Ionicons name="home" color={color} size={size}/>
            </View>
            ),
            tabBarAccessibilityLabel:"Home",
        }}
        />
        
      <Bottom.Screen 
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={[styles.containerButtonTab, {backgroundColor: focused ? colors.green : colors.white}]}>
              <FontAwesome name="user" color={color} size={size} />
            </View>
            ),
            tabBarAccessibilityLabel:"Profile",
          }}
      /> 

      <Bottom.Screen 
        name="SelectPaymentAccount"
        component={SelectPaymentAccount}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={[styles.containerButtonTab, {backgroundColor: focused ? colors.green : colors.white}]}>
              <Octicons name="arrow-switch" color={color} size={size} />
            </View>
            ),
            tabBarAccessibilityLabel:"SelectPaymentAccount",
          }}
      />

      <Bottom.Screen 
        name="AddBanks"
        component={AddBanks}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={[styles.containerButtonTab, {backgroundColor: focused ? colors.green : colors.white}]}>
              <Entypo name="plus" color={color} size={size} />
            </View>
            ),
            tabBarAccessibilityLabel:"AddBanks",
          }}
      />     
    </Bottom.Navigator>
  )
};

const styles = StyleSheet.create({
  containerButtonTab:{
    borderRadius:60, 
    width: 60, 
    height:60, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10
  }
})



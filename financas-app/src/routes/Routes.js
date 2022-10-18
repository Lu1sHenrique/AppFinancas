import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';

import Home from '../pages/Home/index'
import Profile from '../pages/Profile/index'
import SelectPaymentAccount from '../pages/SelectPaymentAccount';
import PaymentInfo from '../pages/PaymentInfo';
import SelectKeyPayment from '../pages/SelectKeyPayment';
import RoutesBottom from '../routes/RoutesBottom'

const Stack = createNativeStackNavigator();
export default function Routes(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: true
    }}
    >

    <Stack.Screen 
      name="RoutesBottom"
      component={RoutesBottom}
      options={{
        headerShown:false
        }}
    />  

    <Stack.Screen 
      name="Profile"
      component={Profile}
      options={{
        headerShown:false
        }}
    />

    <Stack.Screen 
      name="SelectPaymentAccount"
      component={SelectPaymentAccount}
      options={{
        headerShown:false
        }}
    />  

    <Stack.Screen 
      name="PaymentInfo"
      component={PaymentInfo}
      options={{
        headerShown:false
        }}
    />

    <Stack.Screen 
      name="SelectKeyPayment"
      component={SelectKeyPayment}
      options={{
        headerShown:false
        }}
    />     
    </Stack.Navigator>
  )
}

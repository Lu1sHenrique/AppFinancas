import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import RoutesBottom from './RoutesBottom';

import Profile from '../pages/Profile/index';
import PaymentInfo from '../pages/PaymentInfo';
import SelectPaymentAccount from '../pages/SelectPaymentAccount';
import SelectKeyPayment from '../pages/SelectKeyPayment';
import ConfirmDate from '../pages/ConfirmDate';
import AlterValSend from '../pages/AlterValSend';
import Proving from '../pages/Proving';
import AlterBanks from '../pages/AlterBanks';
import StatusSend from '../pages/StatusSend';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >

    <Stack.Screen
      name='RoutesBottom'
      component={RoutesBottom}
    />

    <Stack.Screen
      name='Profile'
      component={Profile}
    />

    <Stack.Screen
      name='SelectPaymentAccount'
      component={SelectPaymentAccount}
    />

    <Stack.Screen
      name='PaymentInfo'
      component={PaymentInfo}
    />

    <Stack.Screen
      name='SelectKeyPayment'
      component={SelectKeyPayment}
    />

    <Stack.Screen
      name='ConfirmDate'
      component={ConfirmDate}
    />

    <Stack.Screen
      name='AlterValSend'
      component={AlterValSend}
    />

    <Stack.Screen 
      name='Proving'
      component={Proving}
    />

    <Stack.Screen 
      name='AlterBanks'
      component={AlterBanks}
    />

    <Stack.Screen 
      name='StatusSend'
      component={StatusSend}
      />
      
  </Stack.Navigator>
)

export default Routes;
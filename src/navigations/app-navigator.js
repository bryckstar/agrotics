import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../scenes/home';
import {ReadQrScreen} from '../scenes/home/scenes/read-qr';
import {RegisterFormScreen} from '../scenes/home/scenes/register-form';

const Stack = createStackNavigator();
export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'AgroTICS'}}
      />
      <Stack.Screen name="ReadQr" component={ReadQrScreen} />
      <Stack.Screen name="RegisterData" component={RegisterFormScreen} />
    </Stack.Navigator>
  );
};

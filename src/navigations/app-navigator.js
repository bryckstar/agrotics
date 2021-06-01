import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../scenes/home';

const Stack = createStackNavigator();
export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '_scenes/login';
import SignupScreen from '_scenes/signup';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Screen name="SignUp" component={SignupScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;

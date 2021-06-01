import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useContext} from 'react';
import AuthNavigator from '_navigations/auth-navigator.js';
import {AuthContext} from '../contexts/authContext';
import {AppNavigator} from './app-navigator';
export const RootNavigator = () => {
  const {user} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

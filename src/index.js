import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from '_navigations/auth-navigator.js';
import {AuthProvider} from './contexts/authContext';
import {Text} from 'react-native';
import {RootNavigator} from './navigations/root-navigator';
const App = () => {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
};

export default App;

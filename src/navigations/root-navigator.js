import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useContext} from 'react';
import {Text} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {View} from 'react-native';
import AuthNavigator from '_navigations/auth-navigator.js';
import {AuthContext} from '../contexts/authContext';
import {AppNavigator} from './app-navigator';
import {createStackNavigator} from '@react-navigation/stack';
import {LoadingStyles} from './styles';
const Stack = createStackNavigator();
export const RootNavigator = () => {
  const {user, isLoading} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isLoading ? (
        <LoadingNavigator />
      ) : user ? (
        <AppNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

const LoadingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const LoadingScreen = () => {
  return (
    <View style={LoadingStyles.viewWrapper}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading...</Text>
    </View>
  );
};

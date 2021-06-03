import React, { useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../scenes/home';
import {ReadQrScreen} from '../scenes/home/scenes/read-qr';
import {RegisterFormScreen} from '../scenes/home/scenes/register-form';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { AuthContext } from '../contexts/authContext';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ReadQr" component={ReadQrScreen} />
      <Stack.Screen name="RegisterData" component={RegisterFormScreen} />
    </Stack.Navigator>
  );
};

export const DrawerNavigator = () => {
  const {logOut} = useContext(AuthContext)
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => (
        <DrawerContentScrollView>
          <DrawerItemList {...props} />
          <DrawerItem label="Cerrar Sesión" onPress={() => {logOut()}} />
        </DrawerContentScrollView>
      )}>
      <Drawer.Screen
        name="Home"
        component={AppNavigator}
        options={{headerShown: true, title: 'Inicio', headerTitle: 'AgroTICS'}}
      />
    </Drawer.Navigator>
  );
};

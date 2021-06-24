import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../scenes/home';
import {ReadQrScreen} from '../scenes/home/scenes/read-qr';
import {RegisterFormScreen} from '../scenes/home/scenes/register-form';
import PlantScreen from '../scenes/plant';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {AuthContext} from '../contexts/authContext';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export const AppNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: 'AgroTICS',
          headerLeftContainerStyle: {width: 'auto', marginLeft: '5%'},
          headerLeft: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Icon
                name="menu"
                size={32}
                onPress={() => {
                  navigation.openDrawer();
                }}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="ReadQr"
        component={ReadQrScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="RegisterData" component={RegisterFormScreen} />
      <Stack.Screen
        name="PlantScreen"
        component={PlantScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const DrawerNavigator = () => {
  const {logOut} = useContext(AuthContext);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => (
        <DrawerContentScrollView>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Cerrar Sesión"
            onPress={() => {
              logOut();
            }}
          />
        </DrawerContentScrollView>
      )}>
      <Drawer.Screen name="Home" component={AppNavigator} />
    </Drawer.Navigator>
  );
};

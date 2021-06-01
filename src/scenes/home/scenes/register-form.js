import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';

export const RegisterFormScreen = ({route, navigation}) => {
  const {id} = route.params;
  return (
    <View>
      <Text>itemId: {JSON.stringify(id)}</Text>
    </View>
  );
};

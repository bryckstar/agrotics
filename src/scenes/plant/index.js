import React from 'react';
import {Button, Input, Text} from 'react-native-elements';
import {useForm, Controller} from 'react-hook-form';
import {Alert, SafeAreaView, View} from 'react-native';
import {PlantStyles} from './styles';

const PlantScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={PlantStyles.viewWrapper}>
        <View style={PlantStyles.formWrapper}>
          <Text h1 style={{textAlign: 'center'}}>
            {' '}
            Datos de Campo
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlantScreen;

import React from 'react';
import {View} from 'react-native';
import {QRCodeReader} from '../../../components/home-components/qr-scanner';

export const ReadQrScreen = ({navigation}) => {
  return (
    <View>
      <QRCodeReader navigation={navigation} />
    </View>
  );
};

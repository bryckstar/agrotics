import React from 'react';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Text, View} from 'react-native';

export const QRCodeReader = ({navigation}) => {
  const onSuccess = e => {
    console.log(e.data);
    navigation.navigate('PlantScreen', {id: e.data});
  };
  return (
    <>
      <View style={{paddingTop: 40}}>
        <Text h1 style={{textAlign: 'center', color: '#639E2E', fontSize: 32}}>
          {' '}
          Escaner QR
        </Text>
      </View>
      <QRCodeScanner
        cameraStyle={{
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '15%',
        }}
        showMarker={true}
        markerStyle={{borderRadius: 10}}
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
      />
    </>
  );
};

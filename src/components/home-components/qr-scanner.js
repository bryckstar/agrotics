import React from 'react';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

export const QRCodeReader = ({navigation}) => {
  const onSuccess = e => {
    navigation.navigate('RegisterData', {id: e.data});
  };
  return (
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
  );
};

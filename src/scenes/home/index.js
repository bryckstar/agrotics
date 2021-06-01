import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Icon} from 'react-native-elements';
const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
      <View style={{position: 'absolute', bottom: 20, right: 20}}>
        <Icon
          name="add"
          reverse={true}
          raised={true}
          color="#517fa4"
          size={32}
          onPress={() => {
            navigation.navigate('ReadQr');
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

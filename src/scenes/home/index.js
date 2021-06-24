import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Alert} from 'react-native';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Input} from 'react-native-elements/dist/input/Input';
import {PlantCard} from '../../components/home-components/plant-card/plant-card';
import {PLantsService} from '../../services/plant-service';
import NetInfo from '@react-native-community/netinfo';
const HomeScreen = ({navigation}) => {
  const [plantsList, setPantsList] = useState([]);
  const [isLoafing, setIsLoading] = useState(false);

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        getPlants();
      } else {
        Alert.alert('No conectado trabajando en modo sin connexion');
      }
    });
  };

  const getPlants = async () => {
    console.log('gettin');
    try {
      const data = await PLantsService.getPants();
      setPantsList(data.docs);
      console.log(data.docs[0]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
      <Input
        placeholder="Buscar"
        rightIcon={<Icon name="search" size={24} color="black" />}
      />
      <FlatList
        data={plantsList}
        renderItem={item => (
          <PlantCard item={item} navigation={navigation} key={item.item._id} />
        )}
        onEndReached={() => {}}
        onRefresh={() => {
          setIsLoading(true);
          checkConnection();
        }}
        refreshing={isLoafing}
        keyExtractor={item => item._id}
      />
      <View style={{position: 'absolute', bottom: 20, right: 20}}>
        <Icon
          name="add"
          reverse={true}
          raised={true}
          color="#FEBE19"
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

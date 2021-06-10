import React from 'react';
import {Text, View} from 'react-native';
import {cardStyles} from './plant-card-styles';
import {DateTime} from 'luxon';
import {TouchableOpacity} from 'react-native';
import _ from 'lodash';
export const PlantCard = ({item, navigation}) => {
  const id = _.get(item, 'item._id');
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('PlantScreen', {
          paramKey: id,
        });
        console.log(id);
      }}>
      <View style={cardStyles.container}>
        <Text>{item.item.commonName}</Text>
        <Text>{item.item.cientificName}</Text>
        <Text>
          {DateTime.fromISO(item.item.createdAt).toFormat('yyyy-LL-dd , HH:mm')}
        </Text>
        <Text>
          {item.item.createdBy.firstName} {item.item.createdBy.lastName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

import React from 'react';
import {Text, View} from 'react-native';
import {cardStyles} from './plant-card-styles';
import {DateTime} from 'luxon';
import {TouchableOpacity} from 'react-native';
export const PlantCard = ({item}) => {
  return (
    <TouchableOpacity onPress={()=>{console.log('xd');}}>
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

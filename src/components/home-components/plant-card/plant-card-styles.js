import {StyleSheet} from 'react-native';

export const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: '5%',
    width: '90%',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#639E2E",
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '2%',
  },
  Title: {
    paddingTop: 5,
    paddingLeft: 10,
    color: '#639E2E',
    fontSize: 16
  },
  Text: {
    paddingLeft:10,
    color: '#6A6A6A',
    fontSize: 13
  },
  Date: {
    color: '#6A6A6A',
    fontSize: 13,
    position: 'absolute',
    bottom: 10,
    right: 10
  }
});

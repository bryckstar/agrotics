import {StyleSheet} from 'react-native';

export const PlantStyles = StyleSheet.create({
  viewWrapper: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  datos: {
    color: '#8C8C8C',
    fontSize: 24,
    textAlign: 'left',
  },
  CollapsibleView: {
    borderWidth: 0,
    alignItems: 'flex-start',
  },
  formWrapper: {
    paddingTop: '5%',
    paddingBottom: '10%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    width: '100%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
  },
  input: {
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  registerLink: {
    textDecorationLine: 'underline',
    fontSize: 15,
    marginTop: '5%',
    color: '#7C89DC',
  },
  ConatinerStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  Button: {
    backgroundColor: '#639E2E',
  },
});

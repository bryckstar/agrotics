import {StyleSheet} from 'react-native';

export const LoginStyles = StyleSheet.create({
  viewWrapper: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '30%',
  },
  formWrapper: {
    borderRadius: 10,
    padding: '5%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    color: '#639E2E',
  },
  boton: {
    backgroundColor: '#639E2E',
  },
});

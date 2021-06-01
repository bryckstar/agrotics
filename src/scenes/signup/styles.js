import {StyleSheet} from 'react-native';

export const SignUpStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    paddingTop: '10%',
  },
  formWrapper: {
    backgroundColor: 'white',
    width: '90%',
    padding: '5%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 10,
  },
});

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {urlApi} from '../environment/variables';
axios.defaults.baseURL = urlApi;

export const campDataService = {
  async registerCampData(formFields) {
    console.log(formFields);
    const token = await getToken();
    try {
      const data = await axios.post(`${urlApi}/campData/`, formFields, {
        headers: {Authorization: token},
      });

      return data.data.message;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};

const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};

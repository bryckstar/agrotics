import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {urlApi} from '../environment/variables';
axios.defaults.baseURL = urlApi;

export const PLantsService = {
  async getPants() {
    const token = await getToken();
    try {
      const data = await axios.get('/plants/table?page=1', {
        headers: {Authorization: token},
      });
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};

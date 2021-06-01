import axios from 'axios';
import {urlApi} from '../environment/variables';

export const LoginService = {
  async login(email, password) {
    console.log(email, password);
    try {
      const data = await axios.post(`${urlApi}/users/login`, {email, password});
      console.log(data);
      return data.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  async register(formFields) {
    try {
      const data = await axios.post(`${urlApi}/users/register`, formFields);
      return data.data.message;
    } catch (error) {
      throw new Error(error);
    }
  },
};

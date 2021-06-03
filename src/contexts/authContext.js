import React, {useEffect} from 'react';
import {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    setIsLoading(true);
    getUser();
  }, []);

  const saveUser = async token => {
    try {
      await AsyncStorage.setItem('token', token);
      setUser(token);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  const getUser = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token != null) {
        setIsLoading(false);
        setUser(token);
      } else {
        setUser('');
        setIsLoading(false);
      }
    } catch (error) {
      setUser('');
    }
  };
  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    setIsLoading(false);
    setUser('');
  };
  return (
    <AuthContext.Provider value={{user, saveUser, isLoading, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};

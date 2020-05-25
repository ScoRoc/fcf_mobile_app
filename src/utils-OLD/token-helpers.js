// Libraries
import React from 'react';
import { AsyncStorage } from 'react-native';
// String Constants
import { _TOKEN_NAME } from './global-variables';

export const deleteToken = async () => {
  try {
    await AsyncStorage.removeItem(_TOKEN_NAME);
    return { user: null, token: null }
  } catch (err) {
    console.log('err: ', err);
  }
}

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem(_TOKEN_NAME);
  } catch (err) {
    console.log('err: ', err);
  }
}

export const setTokenOnDevice = async token => {
  try {
    await AsyncStorage.setItem(_TOKEN_NAME, token);
  } catch (err) {
    console.log('err: ', err);
  }
}

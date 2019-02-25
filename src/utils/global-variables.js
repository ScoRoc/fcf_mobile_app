import EStyleSheet from 'react-native-extended-stylesheet';

export const apiUrl = 'https://fcf-app.herokuapp.com';
export const tokenName = 'fcf-app';

export const getColor = color => EStyleSheet.value(`$${color}`);

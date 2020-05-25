import EStyleSheet from 'react-native-extended-stylesheet';

export const urlHostName = 'https://fcf-app.herokuapp.com';
// export const urlHostName = 'http://localhost:3001';
export const _TOKEN_NAME = 'fcf-app';

export const getColor = color => EStyleSheet.value(`$${color}`);

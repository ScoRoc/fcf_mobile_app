import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default getStyle = style => EStyleSheet.value(style);

export const { height, width } = Dimensions.get('window');
export const tabHeight = 80;
export const black = '#000';
export const blackBG = '#141414';
export const blueAccent = '#88BBC8';
export const blueGradDark = '#0a002a'
export const greenAccent = '#93DBA5';
export const greyDark = '#333';
export const greyMedium = '#555';
export const greyMediumDark = '#444';
export const purpleAccent = '#94A1D1';
export const white = '#FFF';
export const yellow = '#FF0';

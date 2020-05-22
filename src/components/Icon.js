// Libraries
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
// String Constants
import { STRING } from '../utils/stringConstants';

const libraries = {
  AntDesign: AntDesign,
  Entypo: Entypo,
  EvilIcons: EvilIcons,
  Feather: Feather,
  FontAwesome: FontAwesome,
  MaterialCommunityIcons: MaterialCommunityIcons,
}

export default Icon = props => {
  const { color, library, name, size } = props;
  const iconColor = typeof color === STRING ? color : color();
  const Library = libraries[library];
  return (
    <Library name={name} size={size} color={iconColor} />
  );
};

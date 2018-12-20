import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const libraries = {
  AntDesign: AntDesign,
  Feather: Feather,
  FontAwesome: FontAwesome,
  MaterialCommunityIcons: MaterialCommunityIcons,
}

export default Icon = props => {
  const { color, library, name, size } = props;
  const Library = libraries[library];
  return (
    <Library name={name} size={size} color={color} />
  );
};

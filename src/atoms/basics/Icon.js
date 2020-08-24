// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

// Libraries

const libraries = {
  AntDesign: AntDesign,
  Entypo: Entypo,
  EvilIcons: EvilIcons,
  Feather: Feather,
  FontAwesome: FontAwesome,
  MaterialCommunityIcons: MaterialCommunityIcons,
};

// Icon

const Icon = ({ color, iconLibrary, iconName, size }) => {
  const Library = libraries[iconLibrary];
  return <Library color={color} name={iconName} size={size} />;
};

Icon.propTypes = {
  color: PropTypes.string,
  iconLibrary: PropTypes.oneOf([
    'AntDesign',
    'Entypo',
    'EvilIcons',
    'Feather',
    'FontAwesome',
    'MaterialCommunityIcons',
  ]).isRequired,
  iconName: PropTypes.string.isRequired, // must be valid name of icon from associate iconLibrary
  size: PropTypes.number,
};

Icon.defaultProps = {
  color: null,
  iconLibrary: null,
  iconName: null,
  size: 10,
};

export default Icon;

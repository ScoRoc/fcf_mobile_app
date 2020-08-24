// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Icon, Text, TouchableIOSOpacity } from 'atoms';

// LegendKey

const LegendKey = ({ color, iconLibrary, iconName, label, onPress, ...props }) => {
  return (
    <TouchableIOSOpacity
      alignItems='center'
      flexDirection='row'
      marginBottom={1}
      marginTop={1}
      onPress={onPress}
      {...props}
    >
      <Icon color={color} iconLibrary={iconLibrary} iconName={iconName} size={20} />
      <Text color={color} marginLeft={3.5}>
        {label}
      </Text>
    </TouchableIOSOpacity>
  );
};

LegendKey.propTypes = {
  color: PropTypes.string,
  iconLibrary: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

LegendKey.defaultProps = {
  color: 'white',
  iconLibrary: null,
  iconName: null,
  label: null,
  onPress: null,
};

export default LegendKey;

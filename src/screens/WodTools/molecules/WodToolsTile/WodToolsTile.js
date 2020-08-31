// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Icon, Text, TouchableIOSOpacity } from 'atoms';

// WodToolsTile

const WodToolsTile = ({
  iconColor,
  iconName,
  iconLibrary,
  label,
  labelColor,
  onPress,
  ...props
}) => {
  return (
    <TouchableIOSOpacity onPress={onPress} {...props}>
      <Box alignItems='center'>
        <Icon iconLibrary={iconLibrary} iconName={iconName} color={iconColor} size={100} />
        <Text color={labelColor} fontSize={22} marginTop={3}>
          {label}
        </Text>
      </Box>
    </TouchableIOSOpacity>
  );
};

WodToolsTile.propTypes = {
  iconColor: PropTypes.string,
  iconLibrary: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  onPress: PropTypes.func,
};

WodToolsTile.defaultProps = {
  iconColor: 'white',
  iconLibrary: null,
  iconName: null,
  label: null,
  labelColor: 'white',
  onPress: null,
};

export default WodToolsTile;

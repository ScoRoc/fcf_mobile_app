// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Text, TouchableIOSHighlight } from 'atoms';

// NumPadButton

const NumPadButton = ({ color, label, onPress, ...props }) => {
  return (
    <TouchableIOSHighlight
      alignItems='center'
      backgroundColor='olive'
      borderColor='turquoise'
      borderWidth={2}
      justifyContent='center'
      onPress={onPress}
      {...props}
    >
      <Text color={color} fontSize={40} textAlign='center'>
        {label}
      </Text>
    </TouchableIOSHighlight>
  );
};

NumPadButton.propTypes = {
  color: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  onPress: PropTypes.func.isRequired,
};

NumPadButton.defaultProps = {
  color: 'black',
  label: null,
  onPress: null,
};

export default NumPadButton;

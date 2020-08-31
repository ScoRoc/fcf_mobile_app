// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Text, TouchableIOSHighlight } from 'atoms';

// NumPadButton

const NumPadButton = ({ label, onPress, ...props }) => {
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
      <Text fontSize={40} textAlign='center'>
        {label}
      </Text>
    </TouchableIOSHighlight>
  );
};

NumPadButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.element.isRequired,
};

NumPadButton.defaultProps = {
  label: null,
  onPress: null,
};

export default NumPadButton;

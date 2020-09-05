// Libraries
import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
// Atoms
import { Box } from 'atoms';
// NumPadButton
import NumPadButton from './NumPadButton';

// Size

const { width } = Dimensions.get('window');

// NumPad

const NumPad = ({ buttonWidthPercent, onPress, ...props }) => {
  // Size

  const size = width * buttonWidthPercent;

  // Return

  return (
    <Box
      flexDirection='row'
      flexWrap='wrap'
      paddingLeft={size / 4}
      paddingRight={size / 4}
      {...props}
    >
      <NumPadButton
        height={size}
        label='7'
        onPress={() => onPress({ pressedValue: '7' })}
        width={size}
      />
      <NumPadButton
        height={size}
        label='8'
        onPress={() => onPress({ pressedValue: '8' })}
        width={size}
      />
      <NumPadButton
        height={size}
        label='9'
        onPress={() => onPress({ pressedValue: '9' })}
        width={size}
      />
      <NumPadButton
        height={size}
        label='4'
        onPress={() => onPress({ pressedValue: '4' })}
        width={size}
      />
      <NumPadButton
        height={size}
        label='5'
        onPress={() => onPress({ pressedValue: '5' })}
        width={size}
      />
      <NumPadButton
        height={size}
        label='6'
        onPress={() => onPress({ pressedValue: '6' })}
        width={size}
      />
      <NumPadButton
        height={size}
        label='1'
        onPress={() => onPress({ pressedValue: '1' })}
        width={size}
      />
      <NumPadButton
        height={size}
        label='2'
        onPress={() => onPress({ pressedValue: '2' })}
        width={size}
      />
      <NumPadButton
        height={size}
        label='3'
        onPress={() => onPress({ pressedValue: '3' })}
        width={size}
      />
      <NumPadButton
        height={size}
        label='C'
        onPress={() => onPress({ pressedValue: 'clear' })}
        width={size}
      />
      <NumPadButton
        height={size}
        label='0'
        onPress={() => onPress({ pressedValue: '0' })}
        width={size}
      />
      <NumPadButton
        height={size}
        label='arrow'
        onPress={() => onPress({ pressedValue: 'backspace' })}
        width={size}
      />
    </Box>
  );
};

NumPad.propTypes = {
  buttonWidthPercent: PropTypes.number, // button width as percent of screen width
  onPress: PropTypes.func.isRequired,
};

NumPad.defaultProps = {
  buttonWidthPercent: 0.285,
  onPress: null,
};

export default NumPad;

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

const NumPad = ({ buttonWidthPercent, ...props }) => {
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
      <NumPadButton height={size} label='7' onPress={() => console.log('pressed')} width={size} />
      <NumPadButton height={size} label='8' onPress={() => console.log('pressed')} width={size} />
      <NumPadButton height={size} label='9' onPress={() => console.log('pressed')} width={size} />
      <NumPadButton height={size} label='4' onPress={() => console.log('pressed')} width={size} />
    </Box>
  );
};

NumPad.propTypes = {
  buttonWidthPercent: PropTypes.number, // button width as percent of screen width
};

NumPad.defaultProps = {
  buttonWidthPercent: 0.285,
};

export default NumPad;

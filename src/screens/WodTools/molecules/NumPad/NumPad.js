// Libraries
import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
// Atoms
import { Box, Icon } from 'atoms';
// NumPadButton
import NumPadButton from './NumPadButton';

// Size

const { width } = Dimensions.get('window');

// Buttons

const buttonsData = {
  seven: {
    label: '7',
    type: 'number',
    value: 7,
  },
  eight: {
    label: '8',
    type: 'number',
    value: 8,
  },
  nine: {
    label: '9',
    type: 'number',
    value: 9,
  },
  four: {
    label: '4',
    type: 'number',
    value: 4,
  },
  five: {
    label: '5',
    type: 'number',
    value: 5,
  },
  six: {
    label: '6',
    type: 'number',
    value: 6,
  },
  one: {
    label: '1',
    type: 'number',
    value: 1,
  },
  two: {
    label: '2',
    type: 'number',
    value: 2,
  },
  three: {
    label: '3',
    type: 'number',
    value: 3,
  },
  clear: {
    label: 'C',
    type: 'special',
    value: 'clear',
  },
  zero: {
    label: '0',
    type: 'number',
    value: 0,
  },
  backspace: {
    label: (
      <Icon
        color='black'
        iconLibrary='MaterialCommunityIcons'
        iconName='keyboard-backspace'
        size={45}
      />
    ),
    type: 'special',
    value: 'backspace',
  },
};

const colors = {
  number: {
    backgroundColor: 'olive',
    color: 'white',
  },
  special: {
    backgroundColor: 'goldenrod',
    color: 'black',
  },
};

// NumPad

const NumPad = ({ buttonWidthPercent, onPress, ...props }) => {
  // Size

  const size = width * buttonWidthPercent;

  const numPadWidth = size * 3;
  const padding = (width - numPadWidth) / 2;

  // Buttons

  const buttons = Object.values(buttonsData).map(button => (
    <NumPadButton
      backgroundColor={colors[button.type].backgroundColor}
      color={colors[button.type].color}
      height={size}
      key={button.value}
      label={button.label}
      onPress={() => onPress({ value: button.value })}
      width={size}
    />
  ));

  // Return

  return (
    <Box
      flexDirection='row'
      flexWrap='wrap'
      paddingLeft={padding}
      paddingRight={padding}
      {...props}
    >
      {buttons}
    </Box>
  );
};

NumPad.propTypes = {
  buttonWidthPercent: PropTypes.number, // button width as percent of screen width
  onPress: PropTypes.func.isRequired,
};

NumPad.defaultProps = {
  buttonWidthPercent: 0.26,
  onPress: null,
};

export default NumPad;

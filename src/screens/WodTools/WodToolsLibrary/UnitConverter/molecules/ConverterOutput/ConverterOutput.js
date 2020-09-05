// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';
// Constants
import { UNITS } from 'utils/constants';

// String and Unit Convertion

const roundString = ({ decimals, val }) => parseFloat(val).toFixed(decimals);
const stringToTwoDecimals = val => roundString({ decimals: 2, val });

// ConverterOutput

const ConverterOutput = ({ fromUnit, toUnit, value, ...props }) => {
  return (
    <Box
      borderBottomColor='white'
      borderBottomWidth={1}
      flexDirection='row'
      justifyContent='space-evenly'
      paddingBottom={28.5}
      paddingTop={28.5}
      {...props}
    >
      <Text color='white' fontSize={30} textAlign='center'>
        {value ? value : '0'}
      </Text>
      <Text color='white' fontSize={30} textAlign='center'>
        {UNITS[fromUnit].ABBREV}
      </Text>
      <Text color='white' fontSize={30} textAlign='center'>
        {' '}
        ={' '}
      </Text>
      <Text color='white' fontSize={30} textAlign='center'>
        {stringToTwoDecimals(value * UNITS[fromUnit].CONVERT.TO[toUnit])}
      </Text>
      <Text color='white' fontSize={30} textAlign='center'>
        {UNITS[toUnit].ABBREV}
      </Text>
    </Box>
  );
};

ConverterOutput.propTypes = {
  fromUnit: PropTypes.oneOf(Object.values(UNITS)).isRequired,
  toUnit: PropTypes.oneOf(Object.values(UNITS)).isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

ConverterOutput.defaultProps = {
  fromUnit: null,
  toUnit: null,
  value: null,
};

export default ConverterOutput;

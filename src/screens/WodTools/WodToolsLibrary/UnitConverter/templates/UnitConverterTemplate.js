// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';
// WodTools Molecule
import { NumPad } from 'wod-tools-screen/molecules';
// UnitConverter Molecules
import { UnitsPicker } from '../molecules';
// Constants
import { UNITS } from 'utils/constants';

// String and Unit Convertion

const roundString = ({ decimals, val }) => parseFloat(val).toFixed(decimals);
const stringToTwoDecimals = val => roundString({ decimals: 2, val });

// UnitConverterTemplate

const UnitConverterTemplate = ({ ...props }) => {
  // State

  const [fromUnit, setFromUnit] = useState(UNITS.LB.CONSTANT);
  const [toUnit, setToUnit] = useState(UNITS.KG.CONSTANT);
  const [value, setValue] = useState('');

  // Functions

  const handleOnPress = ({ pressedValue }) => {
    const types = {
      add: () => setValue(`${value}${pressedValue}`),
      backspace: () => setValue(value.substring(0, value.length - 1)),
      clear: () => setValue(''),
    };

    types[pressedValue] ? types[pressedValue]() : types.add();
  };

  const handleSetFromUnit = newFromUnit => setFromUnit(newFromUnit);
  const handleSetToUnit = newToUnit => setToUnit(newToUnit);

  // Return

  return (
    <Box backgroundColor='midnightblue' flex={1} {...props}>
      <Box
        borderBottomColor='white'
        borderBottomWidth={1}
        flexDirection='row'
        justifyContent='space-evenly'
        paddingBottom={28.5}
        paddingTop={28.5}
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
      <UnitsPicker
        onChangeFromUnit={handleSetFromUnit}
        onChangeToUnit={handleSetToUnit}
        selectedFromUnit={fromUnit}
        selectedToUnit={toUnit}
      />

      <NumPad onPress={handleOnPress} />
    </Box>
  );
};

UnitConverterTemplate.propTypes = {
  onPress: PropTypes.func,
};

UnitConverterTemplate.defaultProps = {
  onPress: null,
};

export default UnitConverterTemplate;

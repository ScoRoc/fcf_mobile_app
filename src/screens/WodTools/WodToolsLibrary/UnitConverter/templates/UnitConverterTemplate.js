// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box } from 'atoms';
// WodTools Molecule
import { NumPad } from 'wod-tools-screen/molecules';
// UnitConverter Molecules
import { ConverterOutput, UnitsPicker } from '../molecules';
// Constants
import { UNITS } from 'utils/constants';

// UnitConverterTemplate

const UnitConverterTemplate = ({ ...props }) => {
  // State

  const [fromUnit, setFromUnit] = useState(UNITS.LB.CONSTANT);
  const [toUnit, setToUnit] = useState(UNITS.KG.CONSTANT);
  const [value, setValue] = useState('');

  // Functions

  const handleOnPress = ({ value: pressedValue }) => {
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
      <ConverterOutput fromUnit={fromUnit} toUnit={toUnit} value={value} />

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

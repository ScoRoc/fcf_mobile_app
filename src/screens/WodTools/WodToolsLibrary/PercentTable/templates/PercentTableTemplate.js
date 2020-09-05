// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// TODO deprecated -> moved to @react-native-community/picker
// Will need to migrate but not supported by Expo 37
import { Picker } from 'react-native';
// Atoms
import { Box, Text } from 'atoms';
// WodTools Molecule
import { NumPad } from 'wod-tools-screen/molecules';

const getPercents = ({ percentEnd = 110, percentStart = 40 } = {}) => {
  const numbers = [];
  for (let i = percentStart; i <= percentEnd; i++) {
    numbers.push(i);
  }
  return numbers;
};

const percents = getPercents();

// PercentTableTemplate

const PercentTableTemplate = ({ text, ...props }) => {
  // State

  const [value, setValue] = useState(50);

  // Functions

  const handleOnPress = ({ value: pressedValue }) => {
    const newValues = {
      add: `${value}${pressedValue}`,
      backspace: value.substring(0, value.length - 1),
      clear: '',
    };

    const newValue =
      newValues[pressedValue] !== undefined ? newValues[pressedValue] : newValues.add;

    setValue(newValue);
  };

  // Return

  const pickerItems = percents.map(percent => (
    <Picker.Item key={percent} label={percent} value={percent} />
  ));

  return (
    <Box backgroundColor='maroon' flex={1} {...props}>
      <Picker
        itemStyle={{ color: 'white', fontSize: 15 }}
        onValueChange={setValue}
        selectedValue={value}
        style={{ width: 100 }}
        {...props}
      >
        {pickerItems}
      </Picker>
      <NumPad onPress={handleOnPress} />
    </Box>
  );
};

PercentTableTemplate.propTypes = {
  text: PropTypes.string,
};

PercentTableTemplate.defaultProps = {
  text: 'PercentTableTemplate',
};

export default PercentTableTemplate;

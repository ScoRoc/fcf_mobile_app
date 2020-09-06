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
  for (let i = percentEnd; i >= percentStart; i--) {
    numbers.push({ label: i, value: i / 100 });
  }
  return numbers;
};

const percents = getPercents();

// PercentTableTemplate

const PercentTableTemplate = ({ text, ...props }) => {
  // State

  const [calculatedValue, setCalculatedValue] = useState(50);
  const [percentage, setPercentage] = useState(0.5);
  const [pressedValue, setPressedValue] = useState('');

  // Functions

  const handleOnPress = ({ value }) => {
    const newValues = {
      add: `${pressedValue}${value}`,
      backspace: pressedValue.substring(0, pressedValue.length - 1),
      clear: '',
    };

    const newPressedValue = newValues[value] !== undefined ? newValues[value] : newValues.add;

    setPressedValue(newPressedValue);
  };

  const handlePickerChange = val => {
    console.log('val: ', val);
  };

  // Components

  const pickerItems = percents.map(percent => (
    <Picker.Item key={percent.label} label={percent.label.toString()} value={percent.value} />
  ));

  // Return

  return (
    <Box backgroundColor='maroon' flex={1} {...props}>
      <Box alignItems='center' flexDirection='row' justifyContent='space-evenly'>
        <Text color='white' fontSize={30} width={70}>
          {pressedValue}
        </Text>

        <Box alignItems='center' flexDirection='row'>
          <Picker
            itemStyle={{ color: 'white', fontSize: 20 }}
            onValueChange={handlePickerChange}
            selectedValue={0.5}
            style={{ width: 40 }}
            {...props}
          >
            {pickerItems}
          </Picker>
          <Text color='white'>%</Text>
        </Box>

        <Text color='white'>=</Text>
      </Box>

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

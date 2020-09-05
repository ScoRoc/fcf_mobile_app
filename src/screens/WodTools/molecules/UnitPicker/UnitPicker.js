// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// TODO deprecated -> moved to @react-native-community/picker
// Will need to migrate but not supported by Expo 37
import { Picker } from 'react-native';
// Constants
import { UNITS } from 'utils/constants';

// UnitPicker

const UnitPicker = ({ itemStyle, onValueChange, selectedValue, style, ...props }) => {
  const pickerItems = Object.values(UNITS).map(unit => (
    <Picker.Item key={unit.CONSTANT} label={unit.FULL_NAME} value={unit.CONSTANT} />
  ));
  return (
    <Picker
      itemStyle={{ color: 'white', fontSize: 15, ...itemStyle }}
      onValueChange={onValueChange}
      selectedValue={selectedValue}
      style={{ width: 100, ...style }}
      {...props}
    >
      {pickerItems}
    </Picker>
  );
};

UnitPicker.propTypes = {
  itemStyle: PropTypes.object,
  onValueChange: PropTypes.func,
  selectedValue: PropTypes.oneOf(Object.keys(UNITS)),
  style: PropTypes.object,
};

UnitPicker.defaultProps = {
  itemStyle: null,
  onValueChange: null,
  selectedValue: null,
  style: null,
};

export default UnitPicker;

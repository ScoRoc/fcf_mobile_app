// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';
// WodTools Components
// import UnitPicker from 'wod-tools-screen/molecules';
import UnitPicker from 'wod-tools-screen/molecules/UnitPicker/UnitPicker';
// Constants
import { UNITS } from 'utils/constants';

// UnitsPicker

const UnitsPicker = ({
  onChangeFromUnit,
  onChangeToUnit,
  selectedFromUnit,
  selectedToUnit,
  ...props
}) => {
  return (
    <Box
      alignItems='center'
      flexDirection='row'
      height={90}
      justifyContent='space-around'
      overflow='hidden'
      {...props}
    >
      <Text color='white' fontSize={18}>
        From:
      </Text>
      <UnitPicker onValueChange={onChangeFromUnit} selectedValue={selectedFromUnit} />

      <Text color='white' fontSize={18}>
        To:
      </Text>
      <UnitPicker onValueChange={onChangeToUnit} selectedValue={selectedToUnit} />
    </Box>
  );
};

UnitsPicker.propTypes = {
  onChangeFromUnit: PropTypes.func.isRequired,
  onChangeToUnit: PropTypes.func.isRequired,
  selectedFromUnit: PropTypes.oneOf(Object.keys(UNITS)).isRequired,
  selectedToUnit: PropTypes.oneOf(Object.keys(UNITS)).isRequired,
};

UnitsPicker.defaultProps = {
  onChangeFromUnit: null,
  onChangeToUnit: null,
  selectedFromUnit: null,
  selectedToUnit: null,
};

export default UnitsPicker;

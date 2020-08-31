// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';
// WodTools Molecule
import { NumPad } from 'wod-tools-screen/molecules';

// UnitConverterTemplate

const UnitConverterTemplate = ({ text }) => {
  return (
    <Box backgroundColor='midnightblue' flex={1}>
      <Text color='thistle'>{text}</Text>
      <NumPad />
    </Box>
  );
};

UnitConverterTemplate.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
};

UnitConverterTemplate.defaultProps = {
  onPress: null,
  text: 'UnitConverterTemplate',
};

export default UnitConverterTemplate;

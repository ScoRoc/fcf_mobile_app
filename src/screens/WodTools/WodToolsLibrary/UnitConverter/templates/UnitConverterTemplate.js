// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';

// UnitConverterTemplate

const UnitConverterTemplate = ({ text }) => {
  return (
    <Box>
      <Text>{text}</Text>
    </Box>
  );
};

UnitConverterTemplate.propTypes = {
  text: PropTypes.string,
};

UnitConverterTemplate.defaultProps = {
  text: 'UnitConverterTemplate',
};

export default UnitConverterTemplate;

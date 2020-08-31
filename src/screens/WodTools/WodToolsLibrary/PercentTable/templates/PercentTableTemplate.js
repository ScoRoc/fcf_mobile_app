// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';

// PercentTableTemplate

const PercentTableTemplate = ({ text }) => {
  return (
    <Box>
      <Text>{text}</Text>
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

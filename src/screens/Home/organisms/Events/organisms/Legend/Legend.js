// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';

// Legend

const Legend = ({ children, ...props }) => {
  return (
    <Box {...props}>
      <Text>Legend</Text>
    </Box>
  );
};

Legend.propTypes = {
  children: PropTypes.element,
};

Legend.defaultProps = {
  children: null,
};

export default Legend;

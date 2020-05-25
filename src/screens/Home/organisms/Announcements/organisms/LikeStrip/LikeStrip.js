// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';

// LikeStrip

const LikeStrip = ({ children }) => {
  return (
    <Box>
      <Text>[heart]</Text>
      <Text>42</Text>
    </Box>
  );
};

LikeStrip.propTypes = {
  children: PropTypes.element,
};

LikeStrip.defaultProps = {
  children: null,
};

export default LikeStrip;

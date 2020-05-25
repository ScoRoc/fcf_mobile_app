// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';

// LikeStripFOO

const LikeStripFOO = ({ children, ...props }) => {
  return (
    <Box
      alignItems='center'
      backgroundColor='darkslategrey'
      flexDirection='row'
      height={30}
      justifyContent='space-evenly'
      {...props}
    >
      <Text>[heart]</Text>
      <Text>42</Text>
    </Box>
  );
};

LikeStripFOO.propTypes = {
  children: PropTypes.element,
};

LikeStripFOO.defaultProps = {
  children: null,
};

export default LikeStripFOO;

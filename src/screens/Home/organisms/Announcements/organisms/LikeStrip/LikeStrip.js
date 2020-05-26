// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';

// LikeStrip

const LikeStrip = ({ children, likes, ...props }) => {
  return (
    <Box
      alignItems='center'
      bg='darkslategrey'
      flexDirection='row'
      height={40}
      justifyContent='space-evenly'
      {...props}
    >
      <Text>[heart]</Text>
      <Text>{likes}</Text>
    </Box>
  );
};

LikeStrip.propTypes = {
  likes: PropTypes.number.isRequired,
};

LikeStrip.defaultProps = {
  likes: null,
};

export default LikeStrip;

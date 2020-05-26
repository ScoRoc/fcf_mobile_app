// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text, TouchableIOSOpacity } from 'atoms';

// LikeStrip

const LikeStrip = ({ children, likes, onHeartPress, ...props }) => {
  return (
    <Box
      alignItems='center'
      bg='darkslategrey'
      flexDirection='row'
      height={40}
      justifyContent='space-evenly'
      {...props}
    >
      <TouchableIOSOpacity onPress={onHeartPress}>
        <Text>[heart]</Text>
      </TouchableIOSOpacity>
      <Text>{likes}</Text>
    </Box>
  );
};

LikeStrip.propTypes = {
  likes: PropTypes.number.isRequired,
  onHeartPress: PropTypes.func,
};

LikeStrip.defaultProps = {
  likes: null,
  onHeartPress: null,
};

export default LikeStrip;

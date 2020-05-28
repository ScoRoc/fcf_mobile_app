// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text, TouchableIOSOpacity } from 'atoms';

// LikeStrip

const LikeStrip = ({ children, isLiked, likes, onHeartPress, ...props }) => {
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
        <Text color={isLiked ? 'red' : 'black'}>[heart]</Text>
      </TouchableIOSOpacity>
      <Text>{likes}</Text>
    </Box>
  );
};

LikeStrip.propTypes = {
  isLiked: PropTypes.bool,
  likes: PropTypes.number.isRequired,
  onHeartPress: PropTypes.func,
};

LikeStrip.defaultProps = {
  isLiked: false,
  likes: null,
  onHeartPress: null,
};

export default LikeStrip;

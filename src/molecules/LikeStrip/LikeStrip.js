// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text, TouchableIOSOpacity } from 'atoms';

// LikeStrip

const LikeStrip = ({ isLiked, likes, onHeartPress, ...props }) => {
  return (
    <Box bg='darkslategrey' height={40} {...props}>
      <TouchableIOSOpacity
        alignItems='center'
        flexDirection='row'
        height='100%'
        justifyContent='space-evenly'
        onPress={onHeartPress}
      >
        <Text>[heart]</Text>
        <Text color={isLiked ? 'red' : 'black'}>{likes}</Text>
      </TouchableIOSOpacity>
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

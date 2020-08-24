// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// Atoms
import { Box, Text } from 'atoms';
// Molecules
import { LikeStrip } from 'molecules';

// DateBox

const DateBox = ({ bgColor, date, isLiked, likes, onLike, ...props }) => {
  const _moment = moment(date);
  const formattedDate = _moment.format('D');
  const formattedMonth = _moment.format('MMMM');

  return (
    <Box backgroundColor={bgColor} height='100%' width={80} {...props}>
      <Box alignItems='center' flex={1} justifyContent='space-evenly'>
        <Text fontSize={15}>{formattedMonth}</Text>
        <Text fontSize={30}>{formattedDate}</Text>
      </Box>
      <LikeStrip height={20} isLiked={isLiked} likes={likes} onHeartPress={onLike} />
    </Box>
  );
};

DateBox.propTypes = {
  date: PropTypes.string.isRequired, // valid date string
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onLike: PropTypes.func,
};

DateBox.defaultProps = {
  date: null,
  isLiked: null,
  likes: null,
  onLike: null,
};

export default DateBox;

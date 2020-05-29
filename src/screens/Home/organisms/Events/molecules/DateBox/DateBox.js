// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// Atoms
import { Box, Text } from 'atoms';
// Molecules
import { LikeStrip } from 'molecules';

// DateBox

const DateBox = ({ date, isLiked, likes, onLike, ...props }) => {
  const _moment = moment(date);
  const formattedDate = _moment.format('D');
  const formattedMonth = _moment.format('MMMM');

  return (
    <Box backgroundColor='indianred' height='100%' width={70} {...props}>
      <Box alignItems='center' flex={1} justifyContent='space-evenly'>
        <Text fontSize={15}>{formattedMonth}</Text>
        <Text fontSize={30}>{formattedDate}</Text>
      </Box>
      <LikeStrip height={20} isLiked={isLiked} likes={likes} onHeartPress={onLike} />
    </Box>
  );
};

DateBox.propTypes = {
  date: PropTypes.array.isRequired,
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

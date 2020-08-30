// Libraries
import React, { useContext, useGlobal } from 'reactn';
import PropTypes from 'prop-types';
import moment from 'moment';
// Atoms
import { Box, Text } from 'atoms';
// Molecules
import { LikeStrip } from 'molecules';
// Wods Context
import WodsContext from '../../logic/WodsContext';
// Utils
import { isItemLikedByUser } from 'utils/functions';

// Wod

const Wod = ({ wod, ...props }) => {
  // Global

  const [user] = useGlobal('user');

  // Context

  const { handleLike } = useContext(WodsContext);

  // Dates

  const momentDate = moment(wod.date);

  const day = momentDate.format('dddd');
  const dayNum = momentDate.format('D');
  const month = momentDate.format('MMMM');
  const year = momentDate.format('YYYY');

  const wodDate = `${day} - ${month} ${dayNum}, ${year}`;

  // Return

  return (
    <Box {...props}>
      <Text color='lightcyan' fontSize={20} marginBottom={3} textDecorationLine='underline'>
        {wodDate}
      </Text>

      <Text color='lightcyan' fontSize={17} fontWeight='700' marginBottom={4}>
        "{wod.name}"
      </Text>

      <Text color='lightcyan'>{wod.description}</Text>

      <LikeStrip
        height={40}
        isLiked={isItemLikedByUser({ item: wod, user })}
        likes={wod.likedBy.length}
        marginTop={40}
        onHeartPress={() => handleLike?.({ user, wod })}
      />
    </Box>
  );
};

Wod.propTypes = {
  wod: PropTypes.object.isRequired,
};

Wod.defaultProps = {
  wod: {},
};

export default Wod;

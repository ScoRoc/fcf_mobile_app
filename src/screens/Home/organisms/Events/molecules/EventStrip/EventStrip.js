// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text, TouchableIOSHighlight } from 'atoms';
// Event Molecules
import DateBox from '../DateBox/DateBox';
import EventStripDetails from '../EventStripDetails/EventStripDetails';

import { LikeStrip } from 'molecules';

// EventStrip

const EventStrip = ({ event, onPress, ...props }) => {
  return (
    <TouchableIOSHighlight
      marginBottom={10}
      marginTop={10}
      onPress={e => onPress({ e, event })}
      {...props}
    >
      <Box backgroundColor='lemonchiffon' flexDirection='row' height={80}>
        {/* TODO WHY DOES DATEBOX WORK WHEN PULLED IN HERE BUT NOT WHEN IMPORTED ???? */}
        {/* <Box backgroundColor='indianred' height='100%' width={70}>
          <Box alignItems='center' flex={1} justifyContent='space-evenly'>
            <Text fontSize={15}>month</Text>
            <Text fontSize={30}>date</Text>
          </Box>
          <LikeStrip height={20} isLiked={true} likes={3} onHeartPress={onPress} />
        </Box> */}

        <DateBox // TODO WHY IS THIS CAUSING PAGE CAROUSEL SLIDER BAR TO NOT SLIDE??????
          date={event.startDate}
          isLiked={false}
          likes={2}
          onLike={() => console.log('liked...')}
        />

        <EventStripDetails name={event.name} />
      </Box>
    </TouchableIOSHighlight>
  );
};

EventStrip.propTypes = {
  event: PropTypes.object, // event db object
  onPress: PropTypes.func,
};

EventStrip.defaultProps = {
  event: null,
  onPress: null,
};

export default EventStrip;

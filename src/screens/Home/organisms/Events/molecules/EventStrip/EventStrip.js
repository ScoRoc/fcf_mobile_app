// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text, TouchableIOSHighlight } from 'atoms';
// Event Molecules
import { DateBox, EventStripDetails } from '../';

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
        <DateBox
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

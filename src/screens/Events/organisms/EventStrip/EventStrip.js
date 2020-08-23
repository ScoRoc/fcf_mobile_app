// Libraries
import React, { useContext, useEffect, useGlobal } from 'reactn';
import PropTypes from 'prop-types';
// Atoms
import { Box, TouchableIOSHighlight } from 'atoms';
// Event Molecules
import { DateBox, EventStripDetails } from '../../molecules';
// Events Context
import EventsContext from '../../logic/EventsContext';

// EventStrip

const EventStrip = ({ event, onStripPress, ...props }) => {
  // Global

  const [user] = useGlobal('user');

  // Context
  const { setEvent, socket, viewEvent } = useContext(EventsContext);

  // Effects

  useEffect(() => {
    socket.on('invalidLike', msg => console.log('msg: ', msg));
    // TODO verify is other sockets are receiving an update here
    socket.on('likeUpdate', event => setEvent({ event }));
  }, []);

  // Functions

  const handleLike = ({ event, e }) => {
    console.log('liked...');
    event.likedBy.includes(user._id)
      ? event.likedBy.splice(event.likedBy.indexOf(user._id), 1)
      : event.likedBy.push(user._id);
    setEvent({ event });
    socket.emit('like', { eventId: event._id, userId: user._id });
  };

  const handleStripDetailsPress = ({ e, event }) => {
    if (!event.viewedBy.includes(user._id)) {
      viewEvent({ eventId: event._id, viewedByUserId: user._id });
    }
    onStripPress?.({ e, event });
  };

  // Return

  return (
    <Box
      backgroundColor='lemonchiffon'
      flexDirection='row'
      height={80}
      marginBottom={10}
      marginTop={10}
      {...props}
    >
      <DateBox
        date={event.startDate}
        isLiked={event?.likedBy?.includes(user?._id)}
        likes={event.likedBy.length}
        onLike={e => handleLike({ event, e })}
      />

      <TouchableIOSHighlight flex={1} onPress={e => handleStripDetailsPress({ e, event })}>
        <EventStripDetails
          endDate={event.endDate}
          name={event.name}
          startDate={event.startDate}
          type={event.type}
        />
      </TouchableIOSHighlight>
    </Box>
  );
};

EventStrip.propTypes = {
  event: PropTypes.object, // event db object
  onStripPress: PropTypes.func,
};

EventStrip.defaultProps = {
  event: null,
  onStripPress: null,
};

export default EventStrip;

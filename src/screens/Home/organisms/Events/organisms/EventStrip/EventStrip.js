// Libraries
import React, { useContext, useGlobal } from 'reactn';
import PropTypes from 'prop-types';
// Atoms
import { Box, TouchableIOSHighlight } from 'atoms';
// Event Molecules
import { DateBox, EventStripDetails } from '../../molecules';
// Home Context
import HomeContext from 'home-screen/logic/HomeLogic/HomeContext';
// Constants
import { NAV } from 'utils/constants';

// EventStrip

const EventStrip = ({ event, onStripDetailsPress, ...props }) => {
  // Global

  const [user] = useGlobal('user');

  // Context
  const { navigation, viewEvent } = useContext(HomeContext);

  // Functions

  const handleStripDetailsPress = ({ e, event }) => {
    navigation.navigate(NAV.WEB_VIEW, { url: event.url });
    if (!event.viewedBy.includes(user._id)) {
      viewEvent({ eventId: event._id, viewedByUserId: user._id });
    }
    onStripDetailsPress?.({ e, event });
  };

  console.log('event: ', event);

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
        isLiked={false}
        likes={2}
        onLike={() => console.log('liked...')}
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
  onStripDetailsPress: PropTypes.func,
};

EventStrip.defaultProps = {
  event: null,
  onStripDetailsPress: null,
};

export default EventStrip;

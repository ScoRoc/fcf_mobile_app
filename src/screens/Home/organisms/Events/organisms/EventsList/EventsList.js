// Libraries
import React, { useGlobal } from 'reactn';
import PropTypes from 'prop-types';
// Atoms
import { Box } from 'atoms';
// Event Organisms
import { EventStrip } from '../../organisms';

// EventsList

const EventsList = ({ children, ...props }) => {
  // Global

  const [events] = useGlobal('events');
  const [user] = useGlobal('user');

  // Event Strips

  const eventStrips = events?.data
    ? Object.values(events.data).map(event => (
        <EventStrip
          event={event}
          key={event._id}
          onStripDetailsPress={() => console.log('pressed strip details...')}
        />
      ))
    : [];

  return <Box {...props}>{eventStrips}</Box>;
};

EventsList.propTypes = {
  children: PropTypes.element,
};

EventsList.defaultProps = {
  children: null,
};

export default EventsList;

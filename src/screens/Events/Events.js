// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box } from 'atoms';
// Event Organisms
import { EventsList, Legend } from './organisms';
// Events Context
import EventsContext from './logic/EventsContext';

// Events

const Events = ({
  eventTypes,
  getEvents,
  onLegendKeyPress,
  onStripPress,
  selectedEventTypes,
  setEvent,
  socket,
  viewEvent,
  ...props
}) => {
  return (
    <EventsContext.Provider value={{ eventTypes, getEvents, setEvent, socket, viewEvent }}>
      <Box backgroundColor='lightsalmon' flex={1} {...props}>
        <Legend
          eventTypes={eventTypes}
          onLegendKeyPress={onLegendKeyPress}
          selectedEventTypes={selectedEventTypes}
        />
        <EventsList onStripPress={onStripPress} />
      </Box>
    </EventsContext.Provider>
  );
};

Events.propType = {
  eventSocket: PropTypes.func.isRequired,
  eventTypes: PropTypes.object.isRequired,
  getEvents: PropTypes.func.isRequired,
  onLegendKeyPress: PropTypes.func,
  onStripPress: PropTypes.func,
  selectedEventTypes: PropTypes.array.isRequired,
  setEvent: PropTypes.func.isRequired,
  viewEvent: PropTypes.func.isRequired,
};

Events.defaultProps = {
  eventSocket: null,
  eventTypes: {},
  getEvents: null,
  onLegendKeyPress: null,
  onStripPress: null,
  selectedEventTypes: [],
  setEvent: null,
  viewEvent: null,
};

export default Events;

// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';
// Event Molecules
import { EventStrip } from '../../molecules';

// EventsList

const EventsList = ({ children, ...props }) => {
  const events = [
    { _id: 'foo1', name: 'event name 1', startDate: Date.now() },
    { _id: 'foo2', name: 'event name 2', startDate: Date.now() },
  ];

  const eventStrips = events.map(event => (
    <EventStrip event={event} key={event._id} onPress={() => console.log('pressed strip...')} />
  ));

  return <Box {...props}>{eventStrips}</Box>;
};

EventsList.propTypes = {
  children: PropTypes.element,
};

EventsList.defaultProps = {
  children: null,
};

export default EventsList;

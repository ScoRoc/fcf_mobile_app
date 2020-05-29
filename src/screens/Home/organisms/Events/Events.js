// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box } from 'atoms';
// Event Organisms
import { EventsList, Legend } from './organisms';
// Constants
import { NAV } from 'utils/constants';

// Events

const Events = ({ context, ...props }) => {
  return (
    <Box backgroundColor='lightsalmon' flex={1} {...props}>
      <Legend />
      <EventsList />
    </Box>
  );
};

Events.propType = {
  context: PropTypes.element.isRequired, // TODO context element ??
};

Events.defaultProps = {
  context: null,
};

export default Events;

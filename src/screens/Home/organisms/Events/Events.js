// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';

// Events

const Events = ({ children }) => {
  return (
    <Box backgroundColor='green' flex={1}>
      <Text>Events Page...</Text>
    </Box>
  );
};

Events.propTypes = {
  children: PropTypes.element,
};

Events.defaultProps = {
  children: null,
};

export default Events;

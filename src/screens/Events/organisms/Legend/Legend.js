// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';

// Legend

const Legend = ({ eventTypes, ...props }) => {
  console.log('eventTypes: ', eventTypes);
  const createEachKey = ([key, value]) => {
    return (
      <Text color={value.color}>{value.label}</Text>
      // <EventKey
      //   eventKey={value}
      //   filterEventTypes={props.filterEventTypes}
      //   removedTypes={props.removedTypes}
      //   width={width() / numOfKeys}
      //   key={i}
      // />
    );
  };
  const keys = Object.entries(eventTypes).map(createEachKey);

  return (
    <Box flexDirection='row' justifyContent='space-around' paddingBottom={10} paddingTop={10}>
      {keys}
    </Box>
  );
};

Legend.propTypes = {
  eventTypes: PropTypes.object,
};

Legend.defaultProps = {
  eventTypes: null,
};

export default Legend;

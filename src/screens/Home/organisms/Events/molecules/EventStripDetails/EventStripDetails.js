// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';

const paddingLR = 10;

// EventStripDetails

const EventStripDetails = ({ name, ...props }) => {
  return (
    <Box flex={1} position='relative' {...props}>
      <Box
        alignItems='center'
        flex={1}
        flexDirection='row'
        justifyContent='space-between'
        paddingLeft={paddingLR}
        paddingRight={paddingLR}
      >
        <Text>{name}</Text>
        <Text>[goTo icon]</Text>
      </Box>
      <Box
        bottom={0}
        flexDirection='row'
        height={25}
        justifyContent='space-between'
        left={0}
        marginTop={3}
        paddingLeft={paddingLR}
        paddingRight={paddingLR}
        position='absolute'
      >
        <Text>[type icon]</Text>
      </Box>
      <Box
        backgroundColor='goldenrod'
        borderTopLeftRadius={4}
        bottom={0}
        height={25}
        justifyContent='center'
        paddingLeft={paddingLR}
        paddingRight={paddingLR}
        position='absolute'
        right={0}
      >
        <Text>[date range]</Text>
      </Box>
    </Box>
  );
};

EventStripDetails.propTypes = {
  name: PropTypes.string,
};

EventStripDetails.defaultProps = {
  name: null,
};

export default EventStripDetails;

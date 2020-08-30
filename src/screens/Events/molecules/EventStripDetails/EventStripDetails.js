// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';
// DateRange
import DateRange from './DateRange';

const paddingLR = 10;

// EventStripDetails

const EventStripDetails = ({ color, endDate, name, startDate, type, ...props }) => {
  const showDateRange = endDate !== null && endDate !== startDate;

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
        <Text color={color}>{name}</Text>
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
        <Text color={color}>[{type} icon]</Text>
      </Box>
      {showDateRange && (
        <DateRange
          endDate={endDate}
          paddingLeft={paddingLR}
          paddingRight={paddingLR}
          startDate={startDate}
        />
      )}
    </Box>
  );
};

EventStripDetails.propTypes = {
  color: PropTypes.string,
  endDate: PropTypes.string, // valid date string
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string, // valid date string
  type: PropTypes.oneOf(['community', 'competition', 'social']).isRequired,
};

EventStripDetails.defaultProps = {
  color: null,
  endDate: null,
  name: null,
  startDate: null,
  type: null,
};

export default EventStripDetails;

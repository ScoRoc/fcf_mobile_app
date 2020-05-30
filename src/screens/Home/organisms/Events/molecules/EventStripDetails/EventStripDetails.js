// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// Atoms
import { Box, Text } from 'atoms';

const paddingLR = 10;

// EventStripDetails

const EventStripDetails = ({ endDate, name, startDate, type, ...props }) => {
  const momentEndDate = moment(endDate);
  const momentStartDate = moment(startDate);

  const formattedEndDate = momentEndDate.format('Do');
  const formattedEndMonth = momentEndDate.format('MMM');
  const _endDate = `${formattedEndMonth} ${formattedEndDate}`;

  const formattedStartDate = momentStartDate.format('Do');
  const formattedStartMonth = momentStartDate.format('MMM');
  const _startDate = `${formattedStartMonth} ${formattedStartDate}`;

  const dateRange = `${_startDate} - ${_endDate}`;

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
      {endDate && (
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
          <Text>{dateRange}</Text>
        </Box>
      )}
    </Box>
  );
};

EventStripDetails.propTypes = {
  endDate: PropTypes.string, // valid date string
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string, // valid date string
  type: PropTypes.oneOf(['community', 'competition', 'social']).isRequired,
};

EventStripDetails.defaultProps = {
  endDate: null,
  name: null,
  startDate: null,
  type: null,
};

export default EventStripDetails;

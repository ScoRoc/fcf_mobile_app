// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// Atoms
import { Box, Text } from 'atoms';

// DateRange

const DateRange = ({ endDate, startDate, ...props }) => {
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
    <Box
      backgroundColor='goldenrod'
      borderTopLeftRadius={4}
      bottom={0}
      height={25}
      justifyContent='center'
      position='absolute'
      right={0}
      {...props}
    >
      <Text>{dateRange}</Text>
    </Box>
  );
};

DateRange.propTypes = {
  endDate: PropTypes.string, // valid date string
  startDate: PropTypes.string, // valid date string
};

DateRange.defaultProps = {
  endDate: null,
  startDate: null,
};

export default DateRange;

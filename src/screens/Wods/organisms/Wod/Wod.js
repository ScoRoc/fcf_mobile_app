// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// Atoms
import { Box, Text } from 'atoms';

// Wod

const Wod = ({ wod, ...props }) => {
  // Dates

  const momentDate = moment(wod.date);

  const day = momentDate.format('dddd');
  const dayNum = momentDate.format('D');
  const month = momentDate.format('MMMM');
  const year = momentDate.format('YYYY');

  const wodDate = `${day} - ${month} ${dayNum}, ${year}`;

  // Return

  return (
    <Box {...props}>
      <Text
        color='lightcyan'
        fontSize={20}
        // fontWeight='500'
        marginBottom={3}
        textDecorationLine='underline'
      >
        {wodDate}
      </Text>
      <Text
        color='lightcyan'
        fontSize={17}
        fontWeight='700'
        marginBottom={4}
        // marginTop={25.5}
        // writingDirection='rtl'
      >
        "{wod.name}"
      </Text>
      <Text color='lightcyan'>{wod.description}</Text>
    </Box>
  );
};

Wod.propTypes = {
  wod: PropTypes.object.isRequired,
};

Wod.defaultProps = {
  wod: {},
};

export default Wod;

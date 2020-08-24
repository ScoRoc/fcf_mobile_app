// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';

// SectionHeader

const SectionHeader = ({ title }) => (
  <Box alignItems='center' backgroundColor='mediumaquamarine' paddingBottom={1} paddingTop={1}>
    <Text color='white' fontSize={25}>
      {title}
    </Text>
  </Box>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

SectionHeader.defaultProps = {
  title: null,
};

export default SectionHeader;

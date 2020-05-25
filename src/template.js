// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box } from 'atoms';

// Template

const Template = ({ children }) => {
  return <Box>{children}</Box>;
};

Template.propTypes = {
  children: PropTypes.element,
};

Template.defaultProps = {
  children: null,
};

export default Template;

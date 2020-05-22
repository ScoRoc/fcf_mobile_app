import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './StyledText';

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

Text.displayName = Text;

StyledText.propTypes = {
  children: PropTypes.children,
};

StyledText.defaultProps = {
  children: null,
};

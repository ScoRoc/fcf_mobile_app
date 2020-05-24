// Libraries
import React from 'react';
import { animated } from 'react-spring';
// StyledText
import StyledText from './StyledText';

// Text

const Text = props => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

Text.displayName = Text;

const AnimatedText = animated(StyledText);

export { AnimatedText, Text };

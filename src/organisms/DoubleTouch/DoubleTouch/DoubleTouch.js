// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
// Constants
import { DOUBLE_PRESS_DELAY } from 'utils/constants';

// DoubleTouch

const DoubleTouch = ({ children, doublePressThreshold, onDoublePress, onPress, ...props }) => {
  const [lastPress, setLastPress] = useState(null);

  const handlePress = e => {
    const now = Date.now();
    if (lastPress && now - lastPress < doublePressThreshold) {
      onDoublePress?.(e);
    }
    setLastPress(now);
    onPress?.(e);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress} {...props}>
      {children}
    </TouchableWithoutFeedback>
  );
};

DoubleTouch.propTypes = {
  doublePressThreshold: PropTypes.number,
  onDoublePress: PropTypes.func.isRequired,
  onPress: PropTypes.func,
};

DoubleTouch.defaultProps = {
  doublePressThreshold: DOUBLE_PRESS_DELAY,
  onDoublePress: null,
  onPress: null,
};

export default DoubleTouch;

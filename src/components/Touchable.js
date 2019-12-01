// Libraries
import React from 'react';
import {
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  View
} from 'react-native';
// String Constants
import { IOS } from '../utils/stringConstants';

export default Touchable = props => {
  const iosTouchables = {
    highlight: TouchableHighlight,
    opacity: TouchableOpacity,
  };
  const OSSpecificTouchable = Platform.OS === IOS
                            ? iosTouchables[props.iosType]
                            : TouchableNativeFeedback;
  // console.log( Platform.OS );
  return (
    <OSSpecificTouchable {...props}>
      <View style={props.viewStyle}>
        {props.children}
      </View>
    </OSSpecificTouchable>
  );
};

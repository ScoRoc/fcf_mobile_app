import React from 'react';
import {
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  View
} from 'react-native';

export default Touchable = props => {
  const iosTouchables = {
    highlight: TouchableHighlight,
    opacity: TouchableOpacity,
  };
  const OSSpecificTouchable = Platform.OS === 'ios'
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

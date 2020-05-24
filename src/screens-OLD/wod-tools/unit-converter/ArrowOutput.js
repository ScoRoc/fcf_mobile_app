import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default ArrowOutput = props => {
  const { passedStyles, value, unit } = props;
  const { text, unitText, view } = passedStyles;
  return (
    <View style={view}>
      {/* <View style={view}> */}
        <Text style={text}>{value}</Text>
      {/* </View> */}
      <Text style={[text, unitText]}>{unit}</Text>
    </View>
  );
};

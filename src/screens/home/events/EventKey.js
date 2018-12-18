import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EventKey = props => {
  const { color, width } = props;
  return (
    <View style={[styles.view, {width}]}>
      <View style={[styles.square, {backgroundColor: color}]}></View>
      <Text style={{color}}>{props.text}</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  $size: '15rem',
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    height: '$size',
    width: '$size',
    // marginRight: '10rem',
  },
});

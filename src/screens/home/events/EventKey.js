import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Icon from '../../../components/Icon';

export default EventKey = props => {
  const { color, library, name, text, width } = props;
  return (
    <View style={[styles.view, {width}]}>
      {/* <View style={[styles.square, {backgroundColor: color}]}></View> */}
      <Icon color={color} library={library} name={name} size={25} />
      <Text style={{color}}>{text}</Text>
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
  // square: {
  //   height: '$size',
  //   width: '$size',
  //   marginRight: '10rem',
  // },
});

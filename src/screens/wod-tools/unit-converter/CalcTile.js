import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { height, width } from '../../../variables/variables';
// const col = width / 4;

export default CalcTile = props => {
  const { col } = props;
  return (
    <View style={[styles.view, {height: col, width: col}]}>
      <Text>tile</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  // $col: col,
  view: {
    // width: '$col',
    // height: '$col',
    backgroundColor: 'coral',
    borderWidth: '2rem',
    borderColor: 'darkmagenta',
  },
  // text: {
  //
  // },
});

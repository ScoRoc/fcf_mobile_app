import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import CalcTile from './CalcTile';

import { height, width } from '../../../variables/variables';
const col = width / 4;

export default Calc = props => {
  return (
    <View style={styles.view}>
      <CalcTile col={col} />
      <CalcTile col={col} />
      <CalcTile col={col} />
      <CalcTile col={col} />
      <CalcTile col={col} />
      <CalcTile col={col} />
      <CalcTile col={col} />
      <CalcTile col={col} />
      <CalcTile col={col} />
    </View>
  );
}

const styles = EStyleSheet.create({
  $sideSpace: col / 2,
  view: {
    // width: '$col',
    // height: '$col',
    marginLeft: '$sideSpace',
    marginRight: '$sideSpace',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'darkcyan'
  },
  // text: {
  //
  // },
});

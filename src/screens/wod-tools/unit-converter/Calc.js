import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import CalcTile from './CalcTile';

import { height, width } from '../../../variables/variables';
const col = width / 4;

export default Calc = props => {
  return (
    <View style={styles.view}>
      <CalcTile updateInput={props.updateInput} type='add' value={1} col={col} />
      <CalcTile updateInput={props.updateInput} type='add' value={2} col={col} />
      <CalcTile updateInput={props.updateInput} type='add' value={3} col={col} />
      <CalcTile updateInput={props.updateInput} type='add' value={4} col={col} />
      <CalcTile updateInput={props.updateInput} type='add' value={5} col={col} />
      <CalcTile updateInput={props.updateInput} type='add' value={6} col={col} />
      <CalcTile updateInput={props.updateInput} type='add' value={7} col={col} />
      <CalcTile updateInput={props.updateInput} type='add' value={8} col={col} />
      <CalcTile updateInput={props.updateInput} type='add' value={9} col={col} />
      <CalcTile updateInput={props.updateInput} type='add' value={'.'} col={col} />
      <CalcTile updateInput={props.updateInput} type='add' value={0} col={col} />
      <CalcTile updateInput={props.updateInput} type='delete' value={'<--'} col={col} />
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

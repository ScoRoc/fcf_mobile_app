import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import CalcTile from './CalcTile';

import { allTiles } from './tile-info';
import { height, width } from '../../../variables/variables';
const col = width / 4;

export default Calc = props => {
  const calcTiles = Object.entries(allTiles).map((tile, i) => {
    const [key, value] = tile;
    return  <CalcTile
              backgroundColor={value.backgroundColor()}
              clearInput={props.clearInput}
              col={col}
              color={value.color()}
              key={i}
              type={value.type}
              updateInput={props.updateInput}
              value={value.value}
            />
  });
  return (
    <View style={styles.view}>
      {calcTiles}
    </View>
  );
}

const styles = EStyleSheet.create({
  $sideSpace: col / 2,
  view: {
    width,
    paddingLeft: '$sideSpace',
    paddingRight: '$sideSpace',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '$blackBG'
  },
});

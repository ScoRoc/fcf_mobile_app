import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import CalcTile from './CalcTile';

import { allTiles } from './tile-info';

export default Calc = props => {
  const col = () => EStyleSheet.value('$width') / 4;
  const calcTiles = Object.entries(allTiles).map((tile, i) => {
    const [key, value] = tile;
    return  <CalcTile
              backgroundColor={value.backgroundColor()}
              clearInput={props.clearInput}
              col={col()}
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
  $col: '$width / 4',
  $sideSpace: '$col / 2',
  view: {
    width: '$width',
    paddingLeft: '$sideSpace',
    paddingRight: '$sideSpace',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '$blackBG'
  },
});

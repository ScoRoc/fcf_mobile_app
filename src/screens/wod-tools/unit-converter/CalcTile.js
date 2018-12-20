import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../../components/Touchable';

import { height, width } from '../../../variables/variables';
// const col = width / 4;

export default CalcTile = props => {
  const { col, type, value } = props;
  return (
    <Touchable onPress={() => props.updateInput(value, type)} iosType='opacity'>
      <View style={[styles.view, {height: col, width: col}]}>
        <Text style={styles.text}>{value}</Text>
    </View>
  </Touchable>
  );
}

const styles = EStyleSheet.create({
  // $col: col,
  view: {
    // width: '$col',
    // height: '$col',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral',
    borderWidth: '2rem',
    borderColor: 'darkmagenta',
  },
  text: {
    fontSize: '30rem',
  },
});

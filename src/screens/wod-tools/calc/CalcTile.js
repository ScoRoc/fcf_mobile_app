import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../../components/Touchable';

export default CalcTile = props => {
  const { backgroundColor, clearInput, col, color, type, value } = props;
  const handleLongPress = () => {
    if (type === 'delete') clearInput();
  }
  return (
    <Touchable onLongPress={handleLongPress} onPress={() => props.updateInput(type, value)} iosType='opacity'>
      <View style={[styles.view, {height: col, width: col, backgroundColor}]}>
        <Text style={[styles.text, {color}]}>{value}</Text>
    </View>
  </Touchable>
  );
}

const styles = EStyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: '2rem',
    borderColor: '$blackBG',
  },
  text: {
    fontSize: '30rem',
  },
});

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
    <Touchable
      iosType='opacity'
      onLongPress={handleLongPress}
      onPress={() => props.updateInput(type, value)}
      viewStyle={[styles.view, {height: col, width: col, backgroundColor}]}
    >
      <Text style={[styles.text, {color}]}>{value}</Text>
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

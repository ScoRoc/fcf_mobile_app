import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default WodTile = props => {
  return (
    <View style={styles.view}>
      <Text>wod tile</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  view: {
    width: '$width * .7',
    marginRight: '$width * .05',
    backgroundColor: 'orchid',
  },
});

import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export defaul HeartButton = props => {
  return (
    <View style={styles.view}>
      <Text>heart button</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  view: {
    backgroundColor: 'purple',
  },
});

import React from 'react';
import { Button, Dimensions, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EventsSubScreen = props => {
  const { height, width } = Dimensions.get('window');
  return (
    <View style={[styles.screen, {width}]}>
      <Text>Events sub screen</Text>
    </View>
  )
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  screen: {
    // paddingTop: '$padding',
    // flex: 1,
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  text: {
    color: '$pink',
    fontSize: '22rem'
  }
});

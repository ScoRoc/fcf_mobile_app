import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default Dummy = props => {
  return (
    <View style={[ styles.view, styles[`view${props.bgColor}`] ]}>
      <Text style={[ styles.text, styles[`text${props.color}`] ]}>Yo, I'm a Dummy component</Text>
    </View>
  )
};

const styles = EStyleSheet.create({
  view: {
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBlue: {
    backgroundColor: 'blue'
  },
  viewPink: {
    backgroundColor: 'pink'
  },
  text: {
    fontSize: '18rem'
  },
  textBlue: {
    color: 'blue',
  },
  textPink: {
    color: 'pink',
  }
});

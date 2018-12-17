import React from 'react';
import { Button, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default WodScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Hello from WodScreen</Text>
      <Button title='open drawer' onPress={() => props.navigation.openDrawer()} />
    </View>
  )
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  screen: {
    paddingTop: '$padding',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  text: {
    color: '$pink',
    fontSize: '22rem'
  }
});

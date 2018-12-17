import React from 'react';
import { Button, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default WodToolsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Hello from WodToolsScreen</Text>
      <Button title='open drawer' onPress={() => props.navigation.openDrawer()} />
      <Button title='open UnitConverter' onPress={() => props.navigation.navigate('UnitConverter')} />
      <Button title='open PercentTable' onPress={() => props.navigation.navigate('PercentTable')} />
    </View>
  )
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  screen: {
    paddingTop: '$padding',
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  text: {
    color: '$pink',
    fontSize: '22rem'
  }
});

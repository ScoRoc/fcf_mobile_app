import React from 'react';
import { Button, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Calc from './Calc';

export default class UnitConverterScreen extends React.Component {

  static navigationOptions = {
    title: 'Unit Coverter',
    headerTitleStyle: {
      fontSize: 22,
      // fontWeight: 'bold',
    },
  }

  render() {
    return (
      <View style={styles.screen}>
        <Button title='open drawer' onPress={() => this.props.navigation.openDrawer()} />
        <Calc />
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: '#333'
  },
  text: {
    color: '$pink',
    fontSize: '22rem'
  }
});

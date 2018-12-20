import React from 'react';
import { Button, Picker, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { height, width } from '../../../variables/variables';

export default class PercentTableScreen extends React.Component {

  static navigationOptions = {
    title: 'Load % Calculator',
    headerTitleStyle: {
      fontSize: 22,
      // fontWeight: 'bold',
    },
  }

  render() {
    return (
      <View style={styles.screen}>
        <View>
          <Text>input here</Text>
        </View>
        <View style={styles.outputWrapper}>
          <Picker>
            <Picker.Item label='one' value='one' />
            <Picker.Item label='two' value='two' />
          </Picker>
          <View style={styles.output}>
            <Text style={styles.text}>999</Text>
          </View>
        </View>
        <Button title='open drawer' onPress={() => this.props.navigation.openDrawer()} />
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  $padding: '8rem',
  $paddingLR: '$padding * 1.3',
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#333'
  },
  outputWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'darkslategrey',
  },
  output: {
    padding: '$padding',
    paddingLeft: '$paddingLR',
    paddingRight: '$paddingLR',
    backgroundColor: 'lightseagreen',
    borderRadius: '10rem',
  },
  text: {
    fontSize: '50rem'
  }
});

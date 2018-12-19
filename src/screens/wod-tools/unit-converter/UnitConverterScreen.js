import React from 'react';
import { Button, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Calc from './Calc';

export default class UnitConverterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      convertTo: 'LB',
      input: '0',
      converted: '',
    };
  }
  static navigationOptions = {
    title: 'Unit Coverter',
    headerTitleStyle: {
      fontSize: 22,
      // fontWeight: 'bold',
    },
  }

  updateInput = (digit, type) => {
    const input = this.state.input === '0' ? '' : this.state.input;
    const types = {
      add: () => `${input}${digit}`,
      delete: () => input.substring(0, input.length - 1),
    };
    const newInput = types[type]();
    this.setState({input: types[type]()});
  }

  convert = str => {
    console.log('str: ', str);
    return this.state.input;
  }

  componentDidUpdate() {
    if (this.state.converted !== this.state.input) {
      this.setState({converted: this.convert(this.state.input)});
    }
  }

  render() {
    return (
      <View style={styles.screen}>
        <Button title='open drawer' onPress={() => this.props.navigation.openDrawer()} />
        <View>
          <Text>input value: </Text>
          <Text>{this.state.input}</Text>
        </View>
        <Calc updateInput={this.updateInput} />
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

import React from 'react';
import { Button, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Calc from './Calc';

export default class UnitConverterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      convertTo: 'lb',
      update: false,
      input: '',
      converted: '0',
    };
  }
  static navigationOptions = {
    title: 'Unit Coverter',
    headerTitleStyle: {
      fontSize: 22,
      // fontWeight: 'bold',
    },
  }

  flipUnits = () => {
    const changeTo = {
      lb: 'kg',
      kg: 'lb',
    };
    const convertTo = changeTo[this.state.convertTo];
    this.setState({convertTo, update: true})
  }

  updateInput = (digit, type) => {
    const input = this.state.input === '0' ? '' : this.state.input;
    const types = {
      add: () => `${input}${digit}`,
      delete: () => input.substring(0, input.length - 1),
    };
    const newInput = types[type]();
    let returnedInput = newInput[0] === '.'
                        ? newInput.length > 7
                          ? `0${newInput}`.substring(0, 8)
                          : `0${newInput}`
                        : newInput.length > 7
                          ? newInput.substring(0, 7)
                          : newInput;
    this.setState({input: returnedInput, update: true});
  }

  convert = str => {
    if (str === '.') {
      return '0';
    }
    const convertTo = {
      lb: () => str * 2.20462,
      kg: () => str * 0.453592,
    }
    const converted = convertTo[this.state.convertTo]().toFixed(2);
    return converted === '0.00' ? '0' : converted;
  }

  componentDidUpdate() {
    if (this.state.update) {
      this.setState({converted: this.convert(this.state.input), update: false});
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
        <View>
          <Text>output value: </Text>
          <Text>{this.state.converted || '0'}</Text>
        </View>
        <Button title={`to ${this.state.convertTo}`} onPress={this.flipUnits} />
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

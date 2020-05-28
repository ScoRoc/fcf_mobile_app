import React from 'react';
import { Button, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ArrowIO from './ArrowIO';
import Calc from '../calc/Calc';

export default class UnitConverterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      input: '',
      outputLB: '0',
      outputKG: '0',
    };
  }
  static navigationOptions = {
    title: 'Unit Coverter',
    headerTitleStyle: {
      fontSize: 22,
      // fontWeight: 'bold',
    },
  }

  clearInput = () => {
    this.setState({input: '', outputLB: '0', outputKG: '0',});
    return '0';
  }

  updateInput = (type, digit) => {
    const input = this.state.input === '0' ? '' : this.state.input;
    const types = {
      add: () => `${input}${digit}`,
      clear: () => this.clearInput(),
      delete: () => input.substring(0, input.length - 1),
    };
    const newInput = types[type]();
    let returnedInput = newInput[0] === '.'
                        ? newInput.length > 3
                          ? `0${newInput}`.substring(0, 3)
                          : `0${newInput}`
                        : newInput.length > 3
                          ? newInput.substring(0, 3)
                          : newInput;
    this.setState({input: returnedInput, update: true});
  }

  convert = (str, unit) => {
    if (str === '.') {
      return '0';
    }
    const convertTo = {
      lb: () => str * 2.20462,
      kg: () => str * 0.453592,
    };
    const converted = convertTo[unit]().toFixed(1);
    return converted === '0.0' ? '0' : converted;
  }

  componentDidUpdate() {
    if (this.state.update) {
      this.setState({
        outputLB: this.convert(this.state.input, 'lb'),
        outputKG: this.convert(this.state.input, 'kg'),
        update: false
      });
    }
  }

  render() {
    const { input, outputKG, outputLB } = this.state;
    return (
      <View style={styles.screen}>
        <ArrowIO clearInput={this.clearInput} input={input} kg={outputKG} lb={outputLB} />
        <Calc clearInput={this.clearInput} updateInput={this.updateInput} />
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  $blue: 'blue',
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '$blackBG',
  },
  text: {
    fontSize: '22rem'
  }
});

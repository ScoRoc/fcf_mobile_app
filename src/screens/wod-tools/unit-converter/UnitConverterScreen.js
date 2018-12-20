import React from 'react';
import { Button, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ArrowIO from './ArrowIO';
import Calc from './Calc';

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

  updateInput = (digit, type) => {
    const input = this.state.input === '0' ? '' : this.state.input;
    const types = {
      add: () => `${input}${digit}`,
      delete: () => input.substring(0, input.length - 1),
    };
    const newInput = types[type]();
    let returnedInput = newInput[0] === '.'
                        ? newInput.length > 4
                          ? `0${newInput}`.substring(0, 4)
                          : `0${newInput}`
                        : newInput.length > 4
                          ? newInput.substring(0, 4)
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
    const converted = convertTo[unit]().toFixed(2);
    return converted === '0.00' ? '0' : converted;
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
        <ArrowIO input={input} kg={outputKG} lb={outputLB} />
        <Calc updateInput={this.updateInput} />
        <Button title='open drawer' onPress={() => this.props.navigation.openDrawer()} />
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  $blue: 'blue',
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
    // backgroundColor: '#333'
  },
  text: {
    color: '$pink',
    fontSize: '22rem'
  }
});

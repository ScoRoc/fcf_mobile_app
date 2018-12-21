import React from 'react';
import { Button, Picker, Text, TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Calc from '../calc/Calc';

import { height, width } from '../../../variables/variables';
import percents from './percents';

export default class PercentTableScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      output: '0',
      percent: '.40',
    };
  }

  static navigationOptions = {
    title: 'Load % Calculator',
    headerTitleStyle: {
      fontSize: 22,
      // fontWeight: 'bold',
    },
  }

  updatePercent = (input, percent) => {
    const perc = percent || this.state.percent
    return Math.round(input * perc);
  }

  updateInput = (digit, type) => {
    const input = this.state.input === '0' ? '' : this.state.input;
    const types = {
      add: () => `${input}${digit}`,
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
    this.setState({input: returnedInput || '0', output: this.updatePercent(returnedInput)});
  }

  clearInput = () => {
    this.setState({input: '0', output: '0',});
  }

  handlePickerChange = (percent, i) => {
    this.setState({percent, output: this.updatePercent(this.state.input, percent)});
  }

  render() {
    const { input, output, percent } = this.state;
    const pickerItems = percents.map((n, i) => <Picker.Item label={n.toString()} value={n / 100} key={i} />)
    return (
      <View style={styles.screen}>
        <View style={styles.input}>
          <Text>Your load</Text>
          <Text style={styles.inputText}>{input}</Text>
        </View>
        <View style={styles.outputWrapper}>
          <Picker
            itemStyle={styles.pickerItem}
            selectedValue={percent}
            onValueChange={(percent, i) => this.handlePickerChange(percent, i)}
            style={styles.picker}
          >
            {pickerItems}
          </Picker>
          <View style={styles.inBetweenTextWrap}>
            <Text style={styles.inBetweenText}>%</Text>
            <Text style={styles.inBetweenText}>=</Text>
          </View>
          <View style={styles.output}>
            <Text style={styles.outputText}>{output}</Text>
          </View>
        </View>
        <Calc
          clearInput={this.clearInput}
          updateInput={this.updateInput}
        />
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  $padding: '8rem',
  $paddingLR: '$padding * 1.3',
  $borderRadius: '25rem',
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: '#333'
  },
  input: {
    width: '$width / 2',
    padding: '$padding',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'mediumspringgreen',
    borderTopRightRadius: '$borderRadius',
    borderBottomLeftRadius: '$borderRadius',
  },
  inputText: {
    fontSize: '22rem',
  },
  outputWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightslategrey',
  },
  picker: {
    height: '148rem',
    width: '30%',
  },
  pickerItem: {
    height: '148rem',
    fontSize: '22rem',
  },
  inBetweenTextWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'yellow',
  },
  inBetweenText: {
    fontSize: '24rem',
  },
  output: {
    // height: '60%',
    width: '40%',
    padding: '$padding',
    paddingLeft: '$paddingLR',
    paddingRight: '$paddingLR',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightseagreen',
    borderRadius: '10rem',
  },
  outputText: {
    fontSize: '55rem'
  }
});

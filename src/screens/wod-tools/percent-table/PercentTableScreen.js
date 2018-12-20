import React from 'react';
import { Button, Picker, Text, TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { height, width } from '../../../variables/variables';
import percents from './percents';

export default class PercentTableScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      output: '0',
      percent: '',
    };
  }

  static navigationOptions = {
    title: 'Load % Calculator',
    headerTitleStyle: {
      fontSize: 22,
      // fontWeight: 'bold',
    },
  }

  handlePickerChange = (percent, i) => {
    const output = this.state.input * percent;
    this.setState({percent, output});
  }

  render() {
    const { input, output, percent } = this.state;
    const pickerItems = percents.map((n, i) => <Picker.Item label={n.toString()} value={n / 100} key={i} />)
    return (
      <View style={styles.screen}>
        <View>
          <Text>input here</Text>
          <Text>{input}</Text>
          <TextInput
            value={input}
            onChangeText={input => this.setState({input})}
            keyboardType='numeric'
            maxLength={3}
          />
        </View>
        <View style={styles.outputWrapper}>
          <Picker
            selectedValue={percent}
            onValueChange={(percent, i) => this.handlePickerChange(percent, i)}
            style={styles.picker}
          >
            {pickerItems}
          </Picker>
          <View style={styles.output}>
            <Text style={styles.text}>{output}</Text>
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
    alignItems: 'center',
    backgroundColor: 'lightslategrey',
  },
  picker: {
    // height: 250,
    width: '30%',
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

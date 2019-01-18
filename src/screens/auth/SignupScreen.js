import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }

  // handleChange = (data, key) => {
  //   this.setState({ [key]: data });
  // }

  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <View>
        <Text>signup screen</Text>
        <Text>First Name</Text>
        <TextInput
          // onChange={text => this.handleChange(text, 'firstName')}
          onChangeText={text => this.setState({ firstName: text })}
          value={firstName}
        />

        <Text>Last Name</Text>
        <TextInput
          onChangeText={text => this.setState({ lastName: text })}
          value={lastName}
        />

        <Text>Email</Text>
        <TextInput
          onChangeText={text => this.setState({ email: text })}
          value={email}
        />

        <Text>Password</Text>
        <TextInput
          onChangeText={text => this.setState({ password: text })}
          value={password}
        />

      </View>
    );
  }
}

const styles = EStyleSheet.create({
  text: {
    // fontSize: '22rem'
  },
});

import React from 'react';
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { liftUser } from '../../redux/modules/user';
import { apiUrl, tokenName } from '../../utils/global-variables';
import useAxios from '../../utils/axios-helpers';

const path = `${apiUrl}/user/login`;
const { postWithAxios } = useAxios(path);

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  setToken = async token => {
    try {
      await AsyncStorage.setItem(tokenName, token);
    } catch (err) {
      console.log('err: ', err);
    }
  }

  handleSuccess = async ({ user, token }) => {
    await this.setToken(token);
    liftUser({ user, token });
    this.props.navigation.navigate('Main');
  }

  handleErr = errMsg => {
    console.log('signup failed with err: ', errMsg);
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    postWithAxios({ email, password }).then(result => {
      result.data.user
        ? this.handleSuccess({ user: result.data.user, token: result.data.token })
        : this.handleErr(result.data._message);
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <View>
        <Text>login screen</Text>

        <Text>Email</Text>
        <TextInput
          autoCapitalize='none'
          onChangeText={text => this.setState({ email: text })}
          textContentType='emailAddress'
          value={email}
        />

        <Text>Password</Text>
        <TextInput
          autoCapitalize='none'
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry={true}
          textContentType='password'
          value={password}
        />

        <Button
          onPress={this.handleSubmit}
          title='submit'
        />

        <Text>Haven't signed up yet?</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Signup')}
          title='Signup here'
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

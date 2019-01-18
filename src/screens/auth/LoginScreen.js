import React from 'react';
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { liftUser } from '../../redux/modules/user';
import { apiUrl, tokenName } from '../../utils/global-variables';
import useAxios from '../../utils/axios-helpers';

const path = `${apiUrl}/user/login`;
const { postWithAxios } = useAxios(path);

class LoginScreen extends React.Component {
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
    this.props.liftUser({ user, token });
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

        <Button onPress={() => console.log('user: ', this.props.user)} title='props user' />

      </View>
    );
  }
}

const styles = EStyleSheet.create({
  text: {
    // fontSize: '22rem'
  },
});

const mapStateToProps = state => {
  return {
    user: state.user.user,
    token: state.user.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    liftUser: ({ user, token }) => dispatch( liftUser({ user, token }) ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

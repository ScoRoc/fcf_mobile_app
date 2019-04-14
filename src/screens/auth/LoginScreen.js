import React from 'react';
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable';

import { liftUser } from '../../redux/modules/user';
import { apiUrl, getColor, tokenName } from '../../utils/global-variables';
import useAxios from '../../utils/axios-helpers';

const path = `${apiUrl}/user/login`;
const { postWithAxios } = useAxios(path);

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
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
      <View style={styles.page}>
        <Text style={[ styles.pageTitle, styles.text ]}>Login</Text>

        <View style={styles.contentWrapper}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            autoCapitalize='none'
            onChangeText={text => this.setState({ email: text })}
            style={[ styles.text, styles.textInput ]}
            textContentType='emailAddress'
            value={email}
          />

          <Text style={styles.text}>Password</Text>
          <TextInput
            autoCapitalize='none'
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry={true}
            style={[ styles.text, styles.textInput ]}
            textContentType='password'
            value={password}
          />

          <View style={styles.signupTextWrap}>
            <Text style={[ styles.text, styles.smallText ]}>Haven't signed up yet?</Text>
            <Touchable iosType='opacity' onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={[ styles.text, styles.smallText, styles.signupTextLink ]}>Signup here.</Text>
            </Touchable>
          </View>

        </View>

        <Touchable
          activeOpacity={.5}
          iosType='highlight'
          onPress={this.handleSubmit}
          underlayColor={ getColor('yellow') }
          style={styles.submitButton}
        >
          <Text style={[ styles.text, styles.submitButtonText ]}>Log In</Text>
        </Touchable>

      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $fontSize: '24rem',

  page: {
    // paddingBottom: '100rem',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '$blackBG',
  },
  pageTitle: {
    textAlign: 'center',
  },
  text: {
    color: '$white',
    fontSize: '$fontSize',
  },
  contentWrapper: {
    height: '$height / 2',
    justifyContent: 'space-around',
  },
  textInput: {
    backgroundColor: '$greyMediumDark',
    width: '$width * .8',
    alignSelf: 'center',
  },
  submitButton: {
    height: '$fontSize * 3.5',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$yellow',
  },
  submitButtonText: {
    color: '$black',
  },
  signupTextWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: '12rem',
  },
  signupTextLink: {
    marginLeft: '7rem',
    color: '$yellow',
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

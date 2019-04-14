import React from 'react';
import { AsyncStorage, Button, ImageBackground, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable';

import { liftUser } from '../../redux/modules/user';
import { apiUrl, getColor, tokenName } from '../../utils/global-variables';
import { greyDark, white } from '../../../variables/style-sheet';
import useAxios from '../../utils/axios-helpers';

const path = `${apiUrl}/user/create`;
const { postWithAxios } = useAxios(path);

class SignupScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
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
    const { firstName, lastName, email, password } = this.state;
    postWithAxios({ firstName, lastName, email, password }).then(result => {
      result.data.user
        ? this.handleSuccess({ user: result.data.user, token: result.data.token })
        : this.handleErr(result.data._message);
    }).catch(err => console.log('err: ', err));
  }

  render() {
    const { firstName, lastName, email, password } = this.state;
    const yellow = () => EStyleSheet.value('$yellow');
    // temp
    const height = () => EStyleSheet.value('$height');
    const width = () => EStyleSheet.value('$width');
    const imgUri = `https://www.placecage.com/c/${width()}/${height()}`;
    // end temp
    return (
      <View style={styles.page}>
        <ImageBackground blurRadius={4} source={{uri: imgUri}} style={styles.imgBgStyle}>

          <View style={styles.contentWrapper}>

            <View style={styles.logoPlaceholder}></View>

            <TextInput
              onChangeText={text => this.setState({ firstName: text })}
              placeholder='First Name'
              placeholderTextColor={yellow()}
              style={[ styles.text, styles.textInput, styles.inputMargin ]}
              textContentType='givenName'
              value={firstName}
            />

            <TextInput
              onChangeText={text => this.setState({ lastName: text })}
              placeholder='Last Name'
              placeholderTextColor={yellow()}
              style={[ styles.text, styles.textInput, styles.inputMargin ]}
              textContentType='familyName'
              value={lastName}
            />

            <TextInput
              autoCapitalize='none'
              onChangeText={text => this.setState({ email: text })}
              placeholder='Email'
              placeholderTextColor={yellow()}
              style={[ styles.text, styles.textInput, styles.inputMargin ]}
              textContentType='emailAddress'
              value={email}
            />

            <TextInput
              autoCapitalize='none'
              onChangeText={text => this.setState({ password: text })}
              placeholder='Password'
              placeholderTextColor={yellow()}
              style={[ styles.text, styles.textInput, styles.inputMargin ]}
              secureTextEntry={true}
              textContentType='password'
              value={password}
            />

            <View style={[ styles.loginTextWrap, styles.inputMargin ]}>
              <Touchable iosType='opacity' onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={[ styles.text, styles.smallText, styles.loginTextLink ]}>Log In</Text>
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
              <Text style={[ styles.text, styles.submitButtonText ]}>Sign Up</Text>
            </Touchable>

        </ImageBackground>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $fontSize: '28rem',

  page: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '$blackBG',
  },
  imgBgStyle: {
    height: '$height',
    width: '$width',
  },
  logoPlaceholder: {
    height: 200,
    width: '$width / 2',
    marginBottom: 60,
    alignSelf: 'center',
    backgroundColor: '$yellow',
  },
  text: {
    color: '$white',
    fontSize: '$fontSize',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    width: '$width * .8',
    alignSelf: 'center',
    padding: '15rem',
    backgroundColor: 'transparent',
    borderColor: '$yellow',
    borderWidth: 1,
  },
  inputMargin: {
    marginTop: '8rem',
    marginBottom: '8rem',
  },
  submitButton: {
    height: '$fontSize * 3.6',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$yellow',
  },
  submitButtonText: {
    color: '$black',
  },
  loginTextWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: '14rem',
  },
  loginTextLink: {
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);

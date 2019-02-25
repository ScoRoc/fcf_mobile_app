import React from 'react';
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable';

import { liftUser } from '../../redux/modules/user';
import { apiUrl, getColor, tokenName } from '../../utils/global-variables';
import { blackBG, white } from '../../../variables/style-sheet';
import useAxios from '../../utils/axios-helpers';

const path = `${apiUrl}/user/create`;
const { postWithAxios } = useAxios(path);

class SignupScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: blackBG,
    },
    headerTintColor: white
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
    return (
      <View style={styles.page}>
        <Text style={[ styles.text, styles.pageTitle ]}>Signup</Text>

        <View style={styles.contentWrapper}>
          <Text style={styles.text}>First Name</Text>
          <TextInput
            onChangeText={text => this.setState({ firstName: text })}
            style={[ styles.text, styles.textInput ]}
            textContentType='givenName'
            value={firstName}
          />

          <Text style={styles.text}>Last Name</Text>
          <TextInput
            onChangeText={text => this.setState({ lastName: text })}
            style={[ styles.text, styles.textInput ]}
            textContentType='familyName'
            value={lastName}
          />

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
            style={[ styles.text, styles.textInput ]}
            secureTextEntry={true}
            textContentType='password'
            value={password}
          />

          <Touchable
            activeOpacity={.5}
            iosType='highlight'
            onPress={this.handleSubmit}
            underlayColor={ getColor('yellow') }
            style={styles.submitButton}
          >
            <Text style={[ styles.text, styles.submitButtonText ]}>Submit</Text>
          </Touchable>
        </View>

      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $fontSize: '18rem',

  page: {
    // paddingBottom: '100rem',
    flex: 1,
    justifyContent: 'center',
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
  },
  submitButton: {
    height: '$fontSize * 2',
    width: '$width / 3',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$greyDark',
    borderRadius: '6rem',
  },
  submitButtonText: {
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

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
  constructor(props) {
    super(props)
    this.state = {
      password: '',
    }
  }

  handleSuccess = async ({ user, token }) => {
    this.props.liftUser({ user, token });
    this.props.navigation.navigate('Main');
  }

  handleErr = errMsg => {
    console.log('signup failed with err: ', errMsg);
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    putWithAxios({ id: this.props.user._id, password }).then(result => {
      result.data.user
        ? this.handleSuccess({ user: result.data.user, token: result.data.token })
        : this.handleErr(result.data._message);
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.page}>
        <Text style={[ styles.pageTitle, styles.text ]}>Change your password</Text>

        <View style={styles.contentWrapper}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            autoCapitalize='none'
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry={true}
            style={[ styles.text, styles.textInput ]}
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

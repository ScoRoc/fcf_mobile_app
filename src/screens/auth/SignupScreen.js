// Libraries
import React, { useGlobal, useState } from 'reactn';
import { Button, ImageBackground, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EStyleSheet from 'react-native-extended-stylesheet';
// Components
import Touchable from '../../components/Touchable';
// Helpers
import { urlHostName, getColor } from '../../utils/global-variables';
import { blackBG } from '../../style-sheet';
import useAxios from '../../utils/axios-helpers';
import { setTokenOnDevice } from '../../utils/token-helpers';
import { _EMPTYSTRING, HEIGHT_$, WIDTH_$, YELLOW_$ } from '../../utils/stringConstants';

const path = `${urlHostName}/user/create`;
const { postWithAxios } = useAxios(path);

// keyboard avoiding view article
// https://www.freecodecamp.org/news/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580/

const SignupScreen = props => {
  // Global State
  const [user, setUser] = useGlobal('user');
  // State
  const [firstName, setFirstName] = useState(_EMPTYSTRING);
  const [lastName, setLastName] = useState(_EMPTYSTRING);
  const [email, setEmail] = useState(_EMPTYSTRING);
  const [password, setPassword] = useState(_EMPTYSTRING);

  const handleSuccess = async ({ user, token }) => {
    await setToken(token);
    setUser({ self: user, token });
    // props.liftUser({ user, token });
    // props.navigation.navigate('Main');
  }

  const handleErr = errMsg => {
    console.log('signup failed with err: ', errMsg);
  }

  const handleSubmit = () => {
    postWithAxios({ firstName, lastName, email, password }).then(result => {
      result.data.user
        ? handleSuccess({ user: result.data.user, token: result.data.token })
        : handleErr(result.data._message);
    }).catch(err => console.log('err: ', err));
  }

  const yellow = () => EStyleSheet.value(YELLOW_$);
  // temp
  const height = () => EStyleSheet.value(HEIGHT_$);
  const width = () => EStyleSheet.value(WIDTH_$);
  const imgUri = `https://www.placecage.com/c/${width()}/${height()}`;
  // end temp
  return (
    <KeyboardAwareScrollView
      behavior='padding'
      contentContainerStyle={styles.page}
      resetScrollToCoords={{ x: 0, y: 0 }}
      style={{ backgroundColor: blackBG }}
    >
      <ImageBackground blurRadius={4} source={{uri: imgUri}} style={styles.imgBgStyle}>

        <View style={styles.contentWrapper}>

          <View style={styles.logoPlaceholder}></View>

          <TextInput
            onChangeText={setFirstName}
            placeholder='First Name'
            placeholderTextColor={yellow()}
            style={[ styles.text, styles.textInput, styles.inputMargin ]}
            textContentType='givenName'
            value={firstName}
          />

          <TextInput
            onChangeText={setLastName}
            placeholder='Last Name'
            placeholderTextColor={yellow()}
            style={[ styles.text, styles.textInput, styles.inputMargin ]}
            textContentType='familyName'
            value={lastName}
          />

          <TextInput
            autoCapitalize='none'
            onChangeText={setEmail}
            placeholder='Email'
            placeholderTextColor={yellow()}
            style={[ styles.text, styles.textInput, styles.inputMargin ]}
            textContentType='emailAddress'
            value={email}
          />

          <TextInput
            autoCapitalize='none'
            onChangeText={setPassword}
            placeholder='Password'
            placeholderTextColor={yellow()}
            style={[ styles.text, styles.textInput, styles.inputMargin ]}
            secureTextEntry={true}
            textContentType='password'
            value={password}
          />

          <View style={[ styles.loginTextWrap, styles.inputMargin ]}>
            <Touchable iosType='opacity' onPress={() => props.navigation.navigate('Login')}>
              <Text style={[ styles.text, styles.smallText, styles.loginTextLink ]}>Log In</Text>
            </Touchable>
          </View>

        </View>

        <Touchable
          activeOpacity={.5}
          iosType='highlight'
          onPress={handleSubmit}
          underlayColor={ getColor('yellow') }
          style={styles.submitButton}
          >
            <Text style={[ styles.text, styles.submitButtonText ]}>Sign Up</Text>
          </Touchable>

      </ImageBackground>
    </KeyboardAwareScrollView>
  );
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
    height: '$fontSize * 3',
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

SignupScreen.navigationOptions = {
  header: null,
};

export default SignupScreen;

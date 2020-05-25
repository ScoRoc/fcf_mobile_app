// Libraries
import React, { useGlobal, useState } from 'reactn';
import { Button, ImageBackground, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EStyleSheet from 'react-native-extended-stylesheet';
// Components
import Touchable from '../../components/Touchable';
// Helpers
import { urlHostName, getColor } from '../../utils-OLD/global-variables';
import useAxios from '../../utils-OLD/axios-helpers';
import { getToken, setTokenOnDevice } from '../../utils-OLD/token-helpers';
import { blackBG } from '../../style-sheet';
import { _EMPTYSTRING, HEIGHT_$, WIDTH_$, YELLOW_$ } from '../../utils-OLD/stringConstants';

const path = `${urlHostName}/user/login`;
const { postWithAxios } = useAxios(path);

const LoginScreen = props => {
  // Global State
  const [user, setUser] = useGlobal('user');
  // State
  const [email, setEmail] = useState(_EMPTYSTRING);
  const [password, setPassword] = useState(_EMPTYSTRING);

  // FAKE REMOVE
  React.useEffect(() => {
    postWithAxios({ email: 'q@q.com', password: 'password' }).then(result => {
      result.data.user
        ? handleSuccess({ user: result.data.user, token: result.data.token })
        : handleErr(result.data._message);
    });
  }, []);

  const handleSuccess = async ({ user, token }) => {
    await setTokenOnDevice(token);
    // props.liftUser({ user, token });
    setUser({ self: user, token });
    // props.navigation.navigate('Main');
  };

  const handleErr = errMsg => {
    console.log('signup failed with err: ', errMsg);
  };

  const handleSubmit = () => {
    postWithAxios({ email, password }).then(result => {
      result.data.user
        ? handleSuccess({ user: result.data.user, token: result.data.token })
        : handleErr(result.data._message);
    });
  };

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
      <ImageBackground blurRadius={4} source={{ uri: imgUri }} style={styles.imgBgStyle}>
        <View style={styles.contentWrapper}>
          <View style={styles.logoPlaceholder}></View>

          <TextInput
            autoCapitalize='none'
            onChangeText={setEmail}
            placeholder='Email'
            placeholderTextColor={yellow()}
            style={[styles.text, styles.textInput, styles.inputMargin]}
            textContentType='emailAddress'
            value={email}
          />

          <TextInput
            autoCapitalize='none'
            onChangeText={setPassword}
            placeholder='Password'
            placeholderTextColor={yellow()}
            style={[styles.text, styles.textInput, styles.inputMargin]}
            textContentType='password'
            value={password}
          />

          <View style={[styles.signupTextWrap, styles.inputMargin]}>
            <Touchable iosType='opacity' onPress={() => props.navigation.navigate('Signup')}>
              <Text style={[styles.text, styles.smallText, styles.signupTextLink]}>Sign Up</Text>
            </Touchable>
          </View>
        </View>

        <Touchable
          activeOpacity={0.5}
          iosType='highlight'
          onPress={handleSubmit}
          underlayColor={getColor('yellow')}
          style={styles.submitButton}
        >
          <Text style={[styles.text, styles.submitButtonText]}>Log In</Text>
        </Touchable>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

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
    marginBottom: 80,
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
    marginTop: '12rem',
    marginBottom: '12rem',
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
  signupTextWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: '14rem',
  },
  signupTextLink: {
    marginLeft: '7rem',
    color: '$yellow',
  },
});

LoginScreen.navigationOptions = {
  header: null,
};

export default LoginScreen;

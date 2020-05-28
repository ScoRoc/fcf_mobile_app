// Libraries
import React, { useGlobal, useState } from 'reactn';
import { Button, ImageBackground, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from 'axios';
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
  const [email, setEmail] = useState('super@super.com');
  const [password, setPassword] = useState('password');

  // FAKE REMOVE
  React.useEffect(() => {
    // const fooGetUser = async id => {
    //   const path = `http://localhost:3001/users/${id}`;
    //   const res = await axios.get(path);
    //   res && setUser(res.data.user);
    // };

    // TOKEN ISNT SAVING
    // FIND OUT HOW TO HANDLE TOKEN FOR MOBILE

    // const fakeLogin = async () => {
    //   const path = 'http://localhost:3001/auth';
    //   const res = await axios.get(path);
    //   // res.data.user ? handleSuccess({ user: res.data.user }) : handleErr(res.data._message);
    //   console.log('res.data: ', res.data);
    //   res.status === 200 ? fooGetUser(res.data._id) : handleErr(res.data._message);
    // };
    const fakeLogin = async () => {
      const path = 'http://localhost:3001/auth';
      const res = await axios.post(
        path,
        { email: 'super@super.com', password: 'password' },
        {
          params: {
            loginFrom: 'app',
          },
        },
      );
      res ? setUser(res.data.user) : handleErr(res.data._message);
    };
    fakeLogin();

    // postWithAxios({ email: 'q@q.com', password: 'password' }).then(result => {
    //   result.data.user
    //     ? handleSuccess({ user: result.data.user, token: result.data.token })
    //     : handleErr(result.data._message);
    // });
  }, []);

  const handleSuccess = async ({ user }) => {
    // await setTokenOnDevice(token);
    // props.liftUser({ user, token });
    setUser(user);
    // props.navigation.navigate('Main');
  };

  const handleErr = errMsg => {
    console.log('signup failed with err: ', errMsg);
  };

  const handleSubmit = async () => {
    // postWithAxios({ email, password }).then(result => {
    //   result.data.user
    // ? handleSuccess({ user: result.data.user, token: result.data.token })
    // : handleErr(result.data._message);
    // });
    const path = 'http://localhost:3001/auth';
    const res = await axios.post(
      path,
      { email, password },
      {
        params: {
          loginFrom: 'app',
        },
      },
    );
    res ? handleSuccess({ user: res.data.user }) : handleErr(res.data._message);
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

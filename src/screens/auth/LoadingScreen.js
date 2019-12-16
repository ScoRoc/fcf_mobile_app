// Libraries
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from 'axios';
// Helpers
import { liftUser } from '../../redux/modules/user';
import { deleteToken, getToken, setTokenOnDevice } from '../../utils/token-helpers';
import { _TOKEN_NAME, urlHostName } from '../../utils/global-variables';
import { _EMPTYSTRING, NONE, STRING } from '../../utils/global-variables';
import useAxios from '../../utils/axios-helpers';

const path = `${urlHostName}/user/validate`;
const { postWithAxios } = useAxios(path);

const LoadingScreen = props => {
  // State
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // Effects
  useEffect(() => {
    const retreiveToken = async () => {
      const token = await getToken();
      typeof token !== STRING || token === _EMPTYSTRING
        ? tokenFail()
        : tokenSuccess(token);
    }
    retreiveToken();
  }, []);

  const handleErr = errMsg => {
    console.log('signup failed with err: ', errMsg);
  }

  const handleSuccess = async ({ user, token }) => {
    await setTokenOnDevice(token);
    props.liftUser({ user, token });
    props.navigation.navigate('Main');
  }

  const handleValidateFail = err => {
    console.log('err: ', err);
    tokenFail();
  }

  const tokenFail = async () => {
    const { token, user } = await deleteToken();
    setToken(token);
    setUser(user);
    props.navigation.navigate('Auth');
  }

  const tokenSuccess = token => {
    postWithAxios({ token }).then(async result => {
      result.data.user
        ? handleSuccess({ user: result.data.user, token: result.data.token })
        : handleErr(result.data._message);
    }).catch(err => handleValidateFail(err));
  }

  return (
    <View style={styles.view}>
      <Text>loading screen</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);

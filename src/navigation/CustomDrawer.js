import React from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../components/Touchable';

import { logout } from '../redux/modules/user';
import { tokenName } from '../utils/global-variables';

class CustomDrawer extends React.Component {

  deleteToken = async () => {
    try {
      await AsyncStorage.removeItem(tokenName);
      return { user: null, token: null }
    } catch (err) {
      console.log('err: ', err);
    }
  }

  handleLogout = async () => {
    await this.deleteToken()
    this.props.logout();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={styles.view}>
        <DrawerItems {...this.props} />
        <View style={styles.otherLinksView}>
          <Touchable iosType='opacity' onPress={this.handleLogout} viewStyle={styles.touchableView}>
            <Text style={styles.otherLinks}>Logout</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  view: {
    paddingTop: '45rem',
  },
  otherLinksView: {
    marginTop: 0,
    paddingLeft: '15rem',
  },
  touchableView: {
    height: '40rem',
    justifyContent: 'center',
  },
  otherLinks: {
    fontWeight: '600',
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
    logout: () => dispatch( logout() ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);

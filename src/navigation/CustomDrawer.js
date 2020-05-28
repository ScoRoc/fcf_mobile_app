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
    const greeting = this.props.user ? `Hello, ${this.props.user.firstName}` : 'Hellow, how are you today?';
    return (
      <View style={styles.drawerWrapper}>

        <View style={styles.drawerItemsWrapper} >
          <Text style={styles.text}>{greeting}</Text>
          <DrawerItems {...this.props} />
          <View style={styles.customDrawerItemsWrapper}>
            <Touchable iosType='opacity' onPress={this.handleLogout} viewStyle={styles.touchableView}>
              <Text style={styles.customDrawerItems}>Logout</Text>
            </Touchable>
          </View>
        </View>

        <View style={styles.socialWrapper}>
          <Text style={styles.socialText}>Visit us on social at:</Text>
          <View style={styles.socialLinksWrapper}>
            <Text>Social 1</Text>
            <Text>Social 2</Text>
            <Text>Social 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $drawerPadding: '45rem',

  drawerWrapper: {
    paddingTop: '$drawerPadding',
    paddingBottom: '$drawerPadding * 2',
    flex: 1,
    justifyContent: 'space-between',
  },
  drawerItemsWrapper: {
    //
  },
  text: {
    color: '$white',
  },
  customDrawerItemsWrapper: {
    marginTop: 0,
    paddingLeft: '15rem',
  },
  touchableView: {
    height: '40rem',
    justifyContent: 'center',
  },
  customDrawerItems: {
    fontWeight: '600',
    color: '$yellow',
  },
  socialWrapper: {
    //
  },
  socialText: {
    textAlign: 'center',
  },
  socialLinksWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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

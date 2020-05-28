// Libraries
import React, { useGlobal } from 'reactn';
import { Text, TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// Components
import Icon from '../../components/Icon';
import Touchable from '../../components/Touchable';
// Functions
import { getColor } from '../../utils-OLD/global-variables';
import { deleteToken } from '../../utils-OLD/token-helpers';
// String Constants
import { _$AUTH, OPACITY } from '../../utils-OLD/stringConstants';

const ProfileScreen = props => {
  // Global State
  const [user, setUser] = useGlobal('user');

  const handleLogout = async () => {
    await deleteToken();
    setUser({ self: null, token: null });
    // props.logout();
    // props.navigation.navigate(_$AUTH);
  };

  const greeting = props.user ? `Hello, ${props.user.firstName}` : 'Hello, how are you today?';

  return (
    <View style={styles.page}>
      <Text style={styles.text}>{greeting}</Text>
      <Text style={[styles.text, styles.pageTitle]}>Profile</Text>
      <Touchable
        iosType='opacity'
        onPress={() => props.navigation.navigate('ChangePassword')}
        style={styles.profileItem}
        viewStyle={styles.profileItemInner}
      >
        <Text style={styles.text}>Change password</Text>
        <Icon color={getColor('yellow')} library={'Entypo'} name={'chevron-thin-right'} size={20} />
      </Touchable>

      <Touchable iosType={OPACITY} onPress={handleLogout} viewStyle={styles.touchableView}>
        <Text style={styles.logout}>Logout</Text>
      </Touchable>

      <View style={styles.socialWrapper}>
        <Text style={[styles.socialText, styles.text]}>Visit us on social at:</Text>
        <View style={styles.socialLinksWrapper}>
          <Text style={styles.text}>Social 1</Text>
          <Text style={styles.text}>Social 2</Text>
          <Text style={styles.text}>Social 3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  $fontSize: '18rem',

  logout: {
    color: '$yellow',
    marginBottom: '50rem',
    marginTop: '50rem',
    textAlign: 'center',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '$blackBG',
  },
  pageTitle: {
    textAlign: 'center',
  },
  profileItem: {
    height: '$fontSize * 1.7',
    justifyContent: 'center',
    backgroundColor: '$greyDark',
  },
  profileItemInner: {
    paddingLeft: '10rem',
    paddingRight: '10rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  text: {
    color: '$white',
    fontSize: '$fontSize',
  },
});

ProfileScreen.navigationOptions = {
  header: null,
};

export default ProfileScreen;

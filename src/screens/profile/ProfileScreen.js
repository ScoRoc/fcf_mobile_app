import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import Icon from '../../components/Icon';
import Touchable from '../../components/Touchable';

import { getColor } from '../../utils/global-variables';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     email: '',
  //     password: '',
  //   }
  // }

  render() {
    return (
      <View style={styles.page}>
        <Text style={[ styles.text, styles.pageTitle ]}>Profile</Text>

        <Touchable
          iosType='opacity'
          onPress={() => this.props.navigation.navigate('ChangePassword')}
          style={styles.profileItem}
          viewStyle={styles.profileItemInner}
        >
            <Text style={styles.text}>Change password</Text>
            <Icon color={ getColor('yellow') } library={'Entypo'} name={'chevron-thin-right'} size={20} />
        </Touchable>
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
});

const mapStateToProps = state => {
  return {
    user: state.user.user,
    token: state.user.token,
  };
};

export default connect(mapStateToProps)(ProfileScreen);

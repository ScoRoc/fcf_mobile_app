import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Icon from './Icon';
import Touchable from './Touchable';

export default HeartButton = props => {
  const likes = 0;
  return (
    <Touchable
      iosType='highlight'
      onPress={() => console.log('pressed')}
      underlayColor={styles.$underlay}
      style={styles.touchable}
      viewStyle={styles.view}
    >
      <Icon color={styles.$iconColor} library='MaterialCommunityIcons' name='heart-outline' size={20} />
      <Text style={styles.text}>{likes}</Text>
    </Touchable>
  );
};

const styles = EStyleSheet.create({
  $iconColor: '$black',
  $underlay: '$yellow',

  $paddingTB: '1%',
  $paddingLR: '10%',
  touchable: {
    width: '100%',
  },
  view: {
    padding: '$paddingTB',
    paddingLeft: '$paddingLR',
    paddingRight: '$paddingLR',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '$greyMedium',
  },
  text: {
    color: '$white',
  },
});

import React from 'react';
import { Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Icon from './Icon';
import Touchable from './Touchable';

export default LikeButton = props => {
  const { library, liked, likes, name } = props;
  const icon  = liked
              ? <Icon color={styles.$iconLikedColor} library={library.liked} name={name.liked} size={20} />
              : <Icon color={styles.$iconColor} library={library.unliked} name={name.unliked} size={20} />
  return (
    <Touchable
      activeOpacity={.9}
      iosType='highlight'
      onPress={props.updateLike}
      underlayColor={styles.$underlay}
      style={styles.touchable}
      viewStyle={styles.view}
    >
      {icon}
      <Text style={styles.text}>{likes}</Text>
    </Touchable>
  );
};

const styles = EStyleSheet.create({
  $iconColor: '$black',
  $iconLikedColor: '$red',
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

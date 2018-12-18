import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable';
import Icon from '../../components/Icon';

import { height, tabHeight, width } from '../../variables/variables';

export default WodToolTile = props => {
  const { iconName, library, onPress, screen, text } = props;
  return (
    <Touchable style={styles.touchable} onPress={() => onPress(screen)} iosType='opacity'>
      <Icon
        library={library}
        name={iconName}
        color='rebeccapurple'
        size={35}
      />
      <Text style={styles.text}>{text}</Text>
    </Touchable>
  );
};

const styles = EStyleSheet.create({
  $margin: '2rem',
  $size: width / 3,
  touchable: {
    height: '$size',
    width: '$size',
    // marginLeft: '$margin',
    // marginRight: '$margin',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  text: {
    fontSize: '18rem',
  },
});

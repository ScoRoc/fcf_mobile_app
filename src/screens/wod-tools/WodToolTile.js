import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable';
import Icon from '../../components/Icon';

import { height, tabHeight, width } from '../../variables/variables';

export default WodToolTile = props => {
  const { iconName, library, onPress, screen, text } = props;
  return (
    <View style={styles.view}>
      <Touchable style={styles.touchable} onPress={() => onPress(screen)} iosType='opacity'>
        <Icon
          library={library}
          name={iconName}
          color='rebeccapurple'
          size={50}
        />
        <Text style={styles.text}>{text}</Text>
      </Touchable>
    </View>
  );
};

const styles = EStyleSheet.create({
  $size: width / 2,
  $margin: '$size / 2',
  view: {
    height: '$size',
    width: '$size',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  touchable: {
    // height: '$size',
    // width: '$size',
    // marginLeft: '$margin',
    // marginRight: '$margin',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  text: {
    fontSize: '22rem',
  },
});

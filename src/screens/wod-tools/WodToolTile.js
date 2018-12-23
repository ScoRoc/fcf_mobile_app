import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable';
import Icon from '../../components/Icon';

import { height, tabHeight, yellow, width } from '../../variables/variables';

export default WodToolTile = props => {
  const { iconName, library, onPress, screen, text } = props;
  return (
    <View style={styles.view}>
      <Touchable style={styles.touchable} onPress={() => onPress(screen)} iosType='opacity'>
        <Icon
          library={library}
          name={iconName}
          color={yellow}
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
  },
  touchable: {
    alignItems: 'center',
  },
  text: {
    color: '$yellow',
    fontSize: '22rem',
  },
});

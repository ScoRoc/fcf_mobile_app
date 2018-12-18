import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable';
import Icon from '../../components/Icon';

export default WodToolTile = props => {
  const { iconName, library, onPress, screen, text } = props;
  return (
    <View>
      <Touchable onPress={() => onPress(screen)} iosType='opacity'>
        <View>
          <Icon
            library={library}
            name={iconName}
            color='rebeccapurple'
            size={32}
          />
          <Text>{text}</Text>
        </View>
      </Touchable>
    </View>
  );
};

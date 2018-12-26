import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Icon from '../../../components/Icon';
import Touchable from '../../../components/Touchable';

export default EventKey = props => {
  const { color, filterEventTypes, library, name, removedTypes, text, type, width } = props;
  const iconColor = removedTypes.includes(type) ? () => EStyleSheet.value('$greyMedium') : () => color;
  return (
    <Touchable iosType='opacity' onPress={() => filterEventTypes(type)} viewStyle={[styles.view, {width}]}>
      <Icon color={iconColor()} library={library} name={name} size={25} />
      <Text style={{color: iconColor()}}>{text}</Text>
    </Touchable>
  );
};

const styles = EStyleSheet.create({
  $size: '15rem',
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

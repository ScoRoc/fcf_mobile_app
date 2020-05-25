// Libraries
import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// Components
import Icon from '../../components/Icon';
import Touchable from '../../components/Touchable';
// String Constants
import { GREYMEDIUM_$, OPACITY } from '../../utils-OLD/stringConstants';

export default EventKey = props => {
  const { eventKey, filterEventTypes, removedTypes, width } = props;
  const { color, library, name, type } = eventKey;
  const iconColor = removedTypes.includes(type)
    ? () => EStyleSheet.value(GREYMEDIUM_$)
    : () => color();
  return (
    <Touchable
      iosType={OPACITY}
      onPress={() => filterEventTypes(type)}
      viewStyle={[styles.view, { width }]}
    >
      <Icon color={iconColor()} library={library} name={name} size={25} />
      <Text style={[styles.text, { color: iconColor() }]}>{type}</Text>
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
  text: {
    textTransform: 'capitalize',
  },
});

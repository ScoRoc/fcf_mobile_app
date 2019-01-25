import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import EventKey from './EventKey';

import eventKeys from './event-keys';

const { getEventKeys, getKeysText } = eventKeys();
const numOfKeys = getKeysText.length;

export default EventsKey = props => {
  const width = () => EStyleSheet.value('$width');
  const keys = Object.entries(getEventKeys).map((evtKey, i) => {
    const [key, value] = evtKey;
    return <EventKey
      color={value.color()}
      filterEventTypes={props.filterEventTypes}
      library={value.library}
      name={value.name}
      removedTypes={props.removedTypes}
      text={value.text}
      type={key}
      width={width() / numOfKeys}
      key={i}
    />
  });
  return (
    <View style={styles.view}>
    {/* <View style={[styles.view, {paddingRight: numOfKeys * 10 / 2}]}> */}
      {keys}
    </View>
  );
};

const styles = EStyleSheet.create({
  $padding: '14rem',
  view: {
    paddingTop: '$padding',
    paddingBottom: '$padding',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

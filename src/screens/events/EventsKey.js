import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import EventKey from './EventKey';

import eventKeys from './event-keys';

const { getEventKeys, getKeysText } = eventKeys();
const numOfKeys = getKeysText.length;

export default EventsKey = props => {
  const width = () => EStyleSheet.value('$width');
  const createEachKey = (evtKey, i) => {
    const [key, value] = evtKey;
    return <EventKey
      eventKey={value}
      filterEventTypes={props.filterEventTypes}
      removedTypes={props.removedTypes}
      width={width() / numOfKeys}
      key={i}
    />
  }
  const keys = Object.entries(getEventKeys).map(createEachKey);
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

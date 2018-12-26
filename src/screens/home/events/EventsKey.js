import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import EventKey from './EventKey';

import eventKeys from './event-keys';

const { getKeyColorByText, getKeys, getKeysText } = eventKeys();
const numOfKeys = getKeysText.length;

export default EventsKey = props => {
  const width = () => EStyleSheet.value('$width');
  const keys = Object.entries(getKeys).map((evtKey, i) => {
    const [key, value] = evtKey;
    return <EventKey
      color={value.color()}
      library={value.library}
      name={value.name}
      text={value.text}
      width={width() / numOfKeys}
      key={i}
    />
  });
  return (
    // USE ICONS AND MAKE COLLAPSIBLE AND CLICKABLE FOR FILTERING
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

import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import EventKey from './EventKey';

import eventKeys from './event-keys';
import { height, width } from '../../../variables/variables';

const { getKeyColorByText, getKeysText } = eventKeys();
const numOfKeys = getKeysText.length;

export default EventsKey = props => {
  const keys = getKeysText.map((key, i) => {
    return <EventKey
      text={key}
      color={getKeyColorByText(key)}
      width={width / numOfKeys}
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

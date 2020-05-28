// Libraries
import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// Components
import EventKey from './EventKey';
// Keys
import eventKeys from './event-keys';
// String Constants
import { WIDTH_$ } from '../../utils-OLD/stringConstants';

const { getEventKeys, getKeysText } = eventKeys();
const numOfKeys = getKeysText.length;

export default EventLegend = props => {
  const width = () => EStyleSheet.value(WIDTH_$);
  const createEachKey = (evtKey, i) => {
    const [key, value] = evtKey;
    return (
      <EventKey
        eventKey={value}
        filterEventTypes={props.filterEventTypes}
        removedTypes={props.removedTypes}
        width={width() / numOfKeys}
        key={i}
      />
    );
  };
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
});

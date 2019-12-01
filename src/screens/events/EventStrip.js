// Libraries
import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// Components
import DateBox from './DateBox';
import EventNameBox from './EventNameBox';

export default EventStrip = props => {
  const { event, eventKey, finishUpdate, updated, updateEvent } = props;
  const { startDate, throughDate } = event;
  const { color } = eventKey;
  return (
    <View style={styles.strip}>
      <DateBox
        color={color()}
        finishUpdate={finishUpdate}
        event={event}
        updated={updated}
        updateEvent={updateEvent}
      />
      <EventNameBox event={event} eventKey={eventKey} />
    </View>
  );
};

const styles = EStyleSheet.create({
  strip: {
    // height: '$height / 9',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '$greyDark',
    marginBottom: '20rem'
  },
});

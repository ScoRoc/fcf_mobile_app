import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import DateBox from './DateBox';
import EventNameBox from './EventNameBox';

export default EventStrip = props => {
  const { color, date, dateObj, library, name, throughDate, title } = props;
  const month = dateObj.toLocaleString('en-us', {month: 'short'});
  return (
    <View style={styles.strip}>
      <DateBox color={color} date={date} month={month} />
      <EventNameBox color={color} date={date} library={library} month={month} name={name} throughDate={throughDate} title={title} />
    </View>
  );
};

const styles = EStyleSheet.create({
  strip: {
    height: '$height / 9',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '$greyDark',
    marginBottom: '20rem'
  },
});

import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import DateBox from './DateBox';
import EventNameBox from './EventNameBox';

export default EventStrip = props => {
  const { color, date, dateObj, throughDate, title } = props;
  const month = dateObj.toLocaleString('en-us', {month: 'short'});
  return (
    <View style={styles.strip}>
      {/* USE COLORED ICONS INSTEAD OF JUST COLORS */}
      <DateBox color={color} date={date} month={month} />
      <EventNameBox color={color} month={month} throughDate={throughDate} title={title} />
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

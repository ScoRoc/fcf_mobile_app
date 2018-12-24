import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const date = new Date();
const month = date.toLocaleString('en-us', {month: 'short'});

export default EventStrip = props => {
  const { color, date, throughDate, title } = props;
  const dateThrough = throughDate ? `${month} ${date} - ${throughDate}` : '';
  const padding = throughDate ? 3 : 0;
  const paddingLeft = throughDate ? 8 : 0;
  const paddingRight = throughDate ? 8 : 0;
  return (
    <View style={styles.strip}>
      {/* USE COLORED ICONS INSTEAD OF JUST COLORS */}
      <View style={[styles.dateTile, {backgroundColor: color}]}>
        {/* SHORT MONTH NAME ABOVE NUMBER */}
        {/* HEART BUTTON UNDER NUMBER */}
        {/* DOUBLE CLICK ON NUMBER TO HYPERLINK TO WEB */}
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.titleTile}>
        <Text style={[styles.titleText, {color}]}>{title}</Text>
        {/* ICONS UNDER TEXT */}
        <View style={[styles.dateThrough, {padding, paddingLeft, paddingRight}]}>
          <Text style={styles.dateThroutText}>{dateThrough}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  strip: {
    height: '$height / 9.5',
    flexDirection: 'row',
    backgroundColor: '$greyDark',
    marginBottom: '20rem'
  },
  dateTile: {
    width: '$width / 5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: 'white',
    fontSize: '50rem',
  },
  titleTile: {
    flex: 1,
    paddingLeft: '5%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: '23rem',
  },
  dateThrough: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '$greyMedium',
    borderTopLeftRadius: '6rem',
  },
  dateThroutText: {
    color: '$white',
  },
})

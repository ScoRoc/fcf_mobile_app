import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const { height, width } = Dimensions.get('window');
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
      <View style={[styles.dateTile, {backgroundColor: color}]}>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View style={styles.titleTile}>
        <Text style={[styles.titleText, {color}]}>{title}</Text>
        <View style={[styles.dateThrough, {padding, paddingLeft, paddingRight}]}>
          <Text>{dateThrough}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  // $titleTilePadding: '25rem',
  dateThrough: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'lightgrey',
    borderTopLeftRadius: '6rem',
  },
  strip: {
    height: height / 9.5,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: '20rem'
  },
  dateTile: {
    width: width / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: 'white',
    fontSize: '50rem',
  },
  titleTile: {
    // paddingTop: '$titleTilePadding',
    // paddingBottom: '$titleTilePadding',
    flex: 1,
    paddingLeft: '5%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: '23rem',
  },
})

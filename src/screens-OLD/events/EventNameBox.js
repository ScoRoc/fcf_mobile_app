// Libraries
import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';
// Components
import Icon from '../../components/Icon';
import Touchable from '../../components/Touchable';
// String Constants
import {
  _DASH,
  _EMPTYSTRING,
  _SPACE,
  EVIL_ICONS,
  EXTERNAL_LINK,
  HIGHLIGHT,
  MMM,
  WEB_VIEW,
  YELLOW_$,
} from '../../utils-OLD/stringConstants';

const chevron = {
  color: () => EStyleSheet.value(YELLOW_$),
  // library: 'Entypo',
  // name: 'chevron-with-circle-right',
  // library: 'Feather',
  // name: 'external-link',
  library: EVIL_ICONS,
  name: EXTERNAL_LINK,
};

const EventNameBox = props => {
  const { event, eventKey } = props;
  const { library, name } = eventKey;
  const color = eventKey.color();
  const createDateThrough = (start, through) => {
    const startMonth = moment(moment(start)).format(MMM);
    const startDate = moment(moment(start)).date();
    const throughMonth = moment(moment(through)).format(MMM);
    const throughDate = moment(moment(through)).date();
    // 10 25 - 11 05
    return `${startMonth}${_SPACE}${startDate}${_SPACE}${_DASH}${_SPACE}${throughMonth}${_SPACE}${throughDate}`;
  };
  const isRange = moment(event.throughDate)._isValid;
  const dateThrough = isRange
    ? createDateThrough(event.startDate, event.throughDate)
    : _EMPTYSTRING;
  const dateThroughBox = isRange ? (
    <View style={styles.dateThrough}>
      <Text style={styles.dateThroutText}>{dateThrough}</Text>
    </View>
  ) : null;
  return (
    <Touchable
      iosType={HIGHLIGHT}
      onPress={() => props.navigation.navigate(WEB_VIEW, { url: event.url })}
      style={styles.touchable}
      underlayColor={styles.$underlay}
      viewStyle={styles.titleTile}
    >
      <View style={styles.titleView}>
        <Text style={[styles.titleText, { color }]}>{event.eventText}</Text>
        <Icon color={chevron.color()} library={chevron.library} name={chevron.name} size={25} />
      </View>
      <View style={styles.icons}>
        <Icon color={color} library={library} name={name} size={20} />
      </View>
      {dateThroughBox}
    </Touchable>
  );
};

const styles = EStyleSheet.create({
  $underlay: '$yellow',

  $dateBoxWidth: '$width / 5',
  titleTile: {
    width: '$dateBoxWidth * 4',
    flex: 1,
    paddingLeft: '5%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '$greyDark',
  },
  titleView: {
    width: '100%',
    paddingRight: '5rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: '23rem',
  },
  icons: {
    position: 'absolute',
    bottom: '5rem',
    left: '15rem',
  },
  dateThrough: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: '3rem',
    paddingLeft: '8rem',
    paddingRight: '8rem',
    backgroundColor: '$greyMedium',
    borderTopLeftRadius: '6rem',
  },
  dateThroutText: {
    color: '$white',
  },
});

export default EventNameBox;

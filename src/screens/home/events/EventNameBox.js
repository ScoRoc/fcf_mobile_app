import React from 'react';
import { Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';

import Icon from '../../../components/Icon';
import Touchable from '../../../components/Touchable';

const chevron = {
  color: () => EStyleSheet.value('$yellow'),
  // library: 'Entypo',
  // name: 'chevron-with-circle-right',
  // library: 'Feather',
  // name: 'external-link',
  library: 'EvilIcons',
  name: 'external-link',
}

const EventNameBox = props => {
  const { color, library, name, startDate, throughDate, title } = props;
  const startDateNum = startDate.date();
  const startMonth = moment(startDate).format('MMM');
  const throughDateNum = throughDate.date();
  const throughMonth = moment(throughDate).format('MMM');
  const dateThrough = throughDate._isValid ? `${startMonth} ${startDateNum} - ${throughMonth} ${throughDateNum}` : '';
  const dateThroughBox = throughDate._isValid
                        ? <View style={styles.dateThrough}>
                            <Text style={styles.dateThroutText}>{dateThrough}</Text>
                          </View>
                        : null;
  return (
    <Touchable
      iosType='highlight'
      onPress={() => props.navigation.navigate('WebView')}
      style={styles.touchable}
      underlayColor={styles.$underlay}
      viewStyle={styles.titleTile}
    >
      <View style={styles.titleView}>
        <Text style={[styles.titleText, {color}]}>{title}</Text>
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

export default withNavigation(EventNameBox);

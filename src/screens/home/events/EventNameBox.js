import React from 'react';
import { Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

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
  const { color, date, dateObj, library, month, name, throughDate, title } = props;
  const dateThrough = throughDate ? `${month} ${date} - ${throughDate}` : '';
  const padding = throughDate ? 3 : 0;
  const paddingLeft = throughDate ? 8 : 0;
  const paddingRight = throughDate ? 8 : 0;
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
      <View style={[styles.dateThrough, {padding, paddingLeft, paddingRight}]}>
        <Text style={styles.dateThroutText}>{dateThrough}</Text>
      </View>
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
    backgroundColor: '$greyMedium',
    borderTopLeftRadius: '6rem',
  },
  dateThroutText: {
    color: '$white',
  },
});

export default withNavigation(EventNameBox);

// Libraries
import React from 'react';
import { ImageBackground, ScrollView, StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// Components
import EventsSubScreen from './EventsSubScreen';
// String Constants
import { _$ANNOUNCEMENTS, LIGHT_CONTENT, WIDTH_$ } from '../../utils/stringConstants';

export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolledViaPress: false,
      currentPage: _$ANNOUNCEMENTS,
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const width = () => EStyleSheet.value(WIDTH_$);
    const padding = width() * .1;
    return (
      // <View style={[ styles.screen, { paddingLeft: padding, paddingRight: padding } ]}>
      <View style={styles.screen}>
        <StatusBar barStyle={LIGHT_CONTENT} />
        <Text style={styles.header}>Events</Text>
        <EventsSubScreen />
      </View>
    );
  };
};

const styles = EStyleSheet.create({
  screen: {
    paddingTop: '65rem',
    flex: 1,
    backgroundColor: '$blackBG',
  },
  header: {
    color: '$white',
    fontSize: '30rem',
  },
});

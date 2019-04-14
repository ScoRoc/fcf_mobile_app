import React from 'react';
import { ImageBackground, ScrollView, StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import EventsSubScreen from './EventsSubScreen';


export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolledViaPress: false,
      currentPage: 'Announcements',
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.screen}>
        <StatusBar barStyle='light-content' />
        <EventsSubScreen />
      </View>
    );
  };
};

const styles = EStyleSheet.create({
  screen: {
    paddingTop: '50rem',
    // paddingBottom: 50,
    // paddingBottom: '$tabHeight',
    flex: 1,
    backgroundColor: '$blackBG',
  },
});

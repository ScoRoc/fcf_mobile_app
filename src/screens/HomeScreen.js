import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import AnnouncementsSubScreen from '../sub-screens/AnnouncementsSubScreen';
import EventsSubScreen from '../sub-screens/EventsSubScreen';

export default HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Hello from HomeScreen</Text>
      <Button title='open drawer' onPress={() => props.navigation.openDrawer()} />
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <AnnouncementsSubScreen />
        <EventsSubScreen />
      </ScrollView>
    </View>
  )
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  screen: {
    paddingTop: '$padding',
    flex: 1,
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  text: {
    color: '$pink',
    fontSize: '22rem'
  },
  scrollView: {
    // flex: 1,
    backgroundColor: 'orange',
  },
});

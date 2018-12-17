import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import AnnouncementsSubScreen from '../sub-screens/AnnouncementsSubScreen';
import EventsSubScreen from '../sub-screens/EventsSubScreen';

import PagingTitleBar from '../components/PagingTitleBar';

const pages = () => {
  const pages = {
    announcements: {
      title: 'Announcements',
    },
    events: {
      title: 'Events',
    },
  };
  return {
    getPages: (() => pages)(),
    getPageTitles: (() => Object.values(pages).map(page => page.title))(),
    getPagesSpecifcValue: value => Object.values(pages).map(page => page[value]),
  };
};
const { getPages, getPageTitles, getPagesSpecifcValue } = pages();
console.log( getPageTitles );
console.log( getPages );
console.log( getPagesSpecifcValue('title') );

export default HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Hello from HomeScreen</Text>
      <Button title='open drawer' onPress={() => props.navigation.openDrawer()} />
      <PagingTitleBar pageTitles={getPageTitles} scrollEnabled={false} />
      <View style={styles.scrollViewWrap}>
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
    </View>
  )
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  screen: {
    paddingTop: '$padding',
    flex: 1,
  },
  title: {
    height: 100,
    backgroundColor: 'yellow',
    color: '$pink',
    fontSize: '22rem'
  },
  scrollViewWrap: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'orange',
  },
});

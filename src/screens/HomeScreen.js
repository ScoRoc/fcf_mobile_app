import React from 'react';
import { Button, Dimensions, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import AnnouncementsSubScreen from '../sub-screens/AnnouncementsSubScreen';
import EventsSubScreen from '../sub-screens/EventsSubScreen';

import PagingTitleBar from '../components/PagingTitleBar';

const { height, width } = Dimensions.get('window');

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

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Announcements',
    };
  }

  scrollToBeginning = () => {
    this.scrollView.scrollTo( {x: 0} );
    this.setState({currentPage: 'Announcements'});
  }

  scrollToEnd = () => {
    this.scrollView.scrollToEnd();
    this.setState({currentPage: 'Events'});
  }

  handleScroll = e => {
    const { x } = e.nativeEvent.contentOffset;
    const firstPageX = 0;
    const secondPageX = width;
    const xPage = x < width / 2 ? firstPageX : secondPageX;
    const findPage = x => {
      const page = {
        [firstPageX]: 'Announcements',
        [secondPageX]: 'Events',
      };
      return page[x];
    };
    this.setState({ currentPage: findPage(xPage) });
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Hello from HomeScreen</Text>
        <Button title='open drawer' onPress={() => this.props.navigation.openDrawer()} />
        <PagingTitleBar
          currentPage={this.state.currentPage}
          pageTitles={getPageTitles}
          scrollEnabled={false}
          scrollToBeginning={this.scrollToBeginning}
          scrollToEnd={this.scrollToEnd}
        />
        <View style={styles.scrollViewWrap}>
          <ScrollView
            ref={scrollView => this.scrollView = scrollView}
            onScroll={e => this.handleScroll(e)}
            scrollEventThrottle={5}
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
    );
  };
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

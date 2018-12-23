import React from 'react';
import { Button, ImageBackground, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import AnnouncementsSubScreen from './announcements/AnnouncementsSubScreen';
import EventsSubScreen from './events/EventsSubScreen';

import PagingTitleBar from '../../components/PagingTitleBar';

import { height, width } from '../../variables/variables';
import homeScreenPages, { firstPageX, secondPageX } from './home-screen-pages';

const {
  getPages,
  getPageByXValue,
  getPageTitleByXValue,
  getPageTitles,
  getPagesSpecifcValue
} = homeScreenPages();

const uri = 'https://www.placecage.com/c/375/100';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolledViaPress: false,
      currentPage: 'Announcements',
    };
  }

  scrollToBeginning = () => {
    this.scrollView.scrollTo( {x: 0} );
    this.setState({scrolledViaPress: true, currentPage: 'Announcements'});
  }

  scrollToEnd = () => {
    this.scrollView.scrollToEnd();
    this.setState({scrolledViaPress: true, currentPage: 'Events'});
  }

  handleScroll = e => {
    const { x } = e.nativeEvent.contentOffset;
    const xPage = x < width / 2 ? firstPageX : secondPageX;
    if (!this.state.scrolledViaPress) this.setState({ currentPage: getPageTitleByXValue(xPage) });
  }

  render() {
    return (
      <View style={styles.screen}>
        <ImageBackground source={{uri}} style={styles.imgBg}>
          <View style={styles.imgView}>
            <Text style={styles.titleText}>Welcome to FCF</Text>
          </View>
        </ImageBackground>
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
            onMomentumScrollEnd={() => this.setState({scrolledViaPress: false})}
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
    backgroundColor: '$blackBG',
  },
  imgBg: {
    height: '100rem',
    width: '$width',
  },
  imgView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  titleText: {
    color: 'white',
    fontSize: '45rem',
  },
  scrollViewWrap: {
    flex: 1,
  },
  scrollView: {
    // backgroundColor: '$blackBG',
  },
});

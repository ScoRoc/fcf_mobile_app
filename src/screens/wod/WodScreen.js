import React from 'react';
import { Button, Linking, StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';

import HorizontalPagingScroller from '../../components/HorizontalPagingScroller'
import Touchable from '../../components/Touchable'
import Wod from './Wod'
import WodSubScreen from './WodSubScreen'

import wodPages, { firstPageX, secondPageX, thirdPageX, xScrollToValues } from './wod-pages'

const { getPageTitleByXValue, getPageTitles } = wodPages();

const uri = 'https://fcf.sites.zenplanner.com/calendar.cfm';

export default class WodScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'This week',
      scrolledViaPress: false,
    }
  }

  getXpage = x => {
    const width = () => EStyleSheet.value('$width');
    switch (true) {
      case x < width() / 2:
        return firstPageX();
      case x > width() / 2 && x < width() * 1.5:
      console.log('secondPageX: ', secondPageX())
        return secondPageX();
      case x > width() * 1.5 && x < width() * 2.5:
        console.log('thirdPageX: ', thirdPageX())
        return thirdPageX();
    }
  }

  scrollTo = x => {
    const xPage = this.getXpage(x);
    this.setState({ scrolledViaPress: true, currentPage: getPageTitleByXValue(xPage) });
  }

  scrollToBeginning = () => {
    this.setState({ scrolledViaPress: true, currentPage: getPageTitles[0] });
  }

  scrollToEnd = () => {
    this.setState({ scrolledViaPress: true, currentPage: getPageTitles[ getPageTitles.length - 1 ] });
  }

  handleScroll = e => {
    const { x } = e.nativeEvent.contentOffset;
    const xPage = this.getXpage(x);
    if (!this.state.scrolledViaPress) this.setState({ currentPage: getPageTitleByXValue(xPage) });
  }

  render() {
    const { currentPage } = this.state;
    const blackBG = () => EStyleSheet.value('$blackBG');
    const blueGradDark = () => EStyleSheet.value('$blueGradDark');
    const yellow = () => EStyleSheet.value('$yellow');
    const white = () => EStyleSheet.value('$white');

    const monday = moment().startOf('isoweek');
    const mondayMonth = monday.format('MMMM');
    const mondayDate = monday.format('Do');
    const width = () => EStyleSheet.value('$width');
    const padding = width() * .1;
    const selectedColor = yellow;
    const unselectedColor = white;

    // PLACEHOLDER UNTIL GETTING REAL DATA
    const fakeWods = [
      <Wod
        key={0 + 'key'}
        text={`AMRAP in 15 minutes:
50 double unders
50 double kettlebell deadlifts, 2*32/24kg
50goblet squats, 32/24kg
50 calorie row
50 handstand push-ups`}
        wodDate='Monday 4/8'
      />,
      <Wod key={1 + 'key'} text='150 medicine ball clean wall ball shots (20/14) for time' wodDate='Tuesday 4/9' />,
      <Wod key={2 + 'key'} text='150 medicine ball clean wall ball shots (20/14) for time' wodDate='Wednesday 4/10' />,
      <Wod key={3 + 'key'} text='150 medicine ball clean wall ball shots (20/14) for time' wodDate='Thursday 4/11' />,
      <Wod key={4 + 'key'} text='150 medicine ball clean wall ball shots (20/14) for time' wodDate='Friday 4/12' />,
      <Wod key={5 + 'key'} text='150 medicine ball clean wall ball shots (20/14) for time' wodDate='Saturday 4/13' />,
      <Wod key={6 + 'key'} text='150 medicine ball clean wall ball shots (20/14) for time' wodDate='Sunday 4/14' />,
    ];
    const pageScreens = [<WodSubScreen wods={fakeWods} />, <WodSubScreen wods={fakeWods} />, <WodSubScreen wods={fakeWods} />]
    return (
      <View style={styles.screen}>
        <StatusBar barStyle='light-content' />

        <Text style={[ styles.headerText, { paddingLeft: padding } ]}>WOD</Text>

        <HorizontalPagingScroller
          currentPage={currentPage}
          handleMomentumScrollEnd={() => this.setState({ scrolledViaPress: false })}
          handleScroll={this.handleScroll}
          pagingBarTextStyle={styles.pagingBarTextStyle}
          pagingBarTextWrapperStyle={styles.pagingBarTextWrapperStyle}
          pagingBarScrollViewWrapperStyle={styles.pagingBarScrollViewWrapperStyle}
          // pageScreens={getPageScreens}
          pageScreens={pageScreens}
          pageTitles={getPageTitles}
          scrollTo={this.scrollTo}
          scrollToBeginning={this.scrollToBeginning}
          scrollToEnd={this.scrollToEnd}
          selectedColor={selectedColor}
          unselectedColor={unselectedColor}
          xScrollToValues={xScrollToValues}
        />

        {/* <Touchable iosType='opacity' onPress={() => Linking.openURL('spotify://app')} viewStyle={styles.rsvp}> */}
        <Touchable iosType='opacity' onPress={() => this.props.navigation.navigate('WebView', {uri})} viewStyle={styles.rsvp}>
          <Text style={styles.rsvpText}>RSVP</Text>
        </Touchable>

      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $pagingBarSpacing: '20rem',

  screen: {
    paddingTop: '65rem',
    flex: 1,
    backgroundColor: '$blackBG',
  },
  headerText: {
    marginBottom: '20rem',
    color: '$white',
    fontSize: '30rem',
  },
  pagingBarScrollViewWrapperStyle: {
    justifyContent: 'flex-start',
  },
  pagingBarTextStyle: {
    fontSize: '18rem',
    padding: 0,
    margin: 0,
  },
  pagingBarTextWrapperStyle: {
    padding: 0,
    margin: 0,
    marginLeft: '$pagingBarSpacing',
    marginRight: '$pagingBarSpacing',
  },
  rsvp: {
    paddingTop: '15rem',
    paddingBottom: '15rem',
    backgroundColor: '$yellow',
  },
  rsvpText: {
    fontSize: '20rem',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

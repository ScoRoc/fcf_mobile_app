import React from 'react';
import { Button, Linking, StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';

import HorizontalPagingScroller from '../../components/HorizontalPagingScroller'
import Touchable from '../../components/Touchable'
import Wod from './Wod'
import WodSubScreen from './WodSubScreen'

import wodPages, { firstPageX, secondPageX, thirdPageX, xScrollToValues } from './wod-pages'
import useAxios from '../../utils/axios-helpers';
import { urlHostName } from '../../utils/global-variables';

const path = `${urlHostName}/wodweek`;
const { getWithAxios } = useAxios(path);


const { getPages, getPageTitleByXValue, getPageTitles } = wodPages();

const url = 'https://fcf.sites.zenplanner.com/calendar.cfm';

export default class WodScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'This week',
      currentWodWeek: null,
      pastWodWeeks: [],
      scrolledViaPress: false,
    }
  }

  getCurrentAndPastWodWeeks = wodWeeks => {
    const currentAndPastWodWeeks = wodWeeks.reduce((acc, wodWeek) => {
      return this.isWodWeekForCurrentWeek(wodWeek)
              ? [ [...acc[0].concat(wodWeek)], acc[1] ]
              : [ acc[0], [...acc[1].concat(wodWeek)]]
    }, [[], []] )
    return currentAndPastWodWeeks
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

  isFirstDayOfCurrentWeek = day => {
    const weekStart = moment().startOf('week');
    return moment(weekStart).isSame( moment(day).format() );
  }

  isWodWeekForCurrentWeek = wodWeek => this.isFirstDayOfCurrentWeek(wodWeek.weekOf)

  makeWodCompoment = wod => {
    console.log('wod: ', wod)
    return <Wod key={wod._id} text={wod.text} wodDate='test date' />
  }
  makeWodFromWodWeek = wodWeek => this.makeWodCompoment(wodWeek.wods)

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

  comonentDidUpdate = (prevProps, prevState) => {
    // console.log('prevState.currentWodWeek: ', prevState.currentWodWeek)
    // console.log('this.state.currentWodWeek: ', this.state.currentWodWeek)
  }

  componentDidMount() {
    getWithAxios().then(result => {
      const { wodWeeks } = result.data;
      const [ currentWodWeek, pastWodWeeks ] = this.getCurrentAndPastWodWeeks(wodWeeks);
      // SHOULD CHECK FOR MULTIPLE WEEKS IN CURRENT WEEK
      this.setState({ currentWodWeek: currentWodWeek[0], pastWodWeeks });
    });
  }

  render() {
    const { currentPage, currentWodWeek, pastWodWeeks } = this.state;
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

    // console.log('currentWodWeek: ', currentWodWeek)
    // console.log('currentWodWeek.wods: ', currentWodWeek && currentWodWeek.wods)
    // console.log('wods map foo: ', currentWodWeek && currentWodWeek.wods.map(wod => 'yo yo yo'))
    const currentWodComponents = currentWodWeek ? currentWodWeek.wods.map(wod => this.makeWodCompoment(wod)) : [];
    // console.log('currentWodWeek: ', currentWodWeek)
    // console.log('currentWodComponents: ', currentWodComponents)
    // const pastWods = pastWodWeeks.map(this.makeWodFromWodWeek)
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
    const pageScreens = Object.values(getPages).map((page, i) => <WodSubScreen key={i + page.title} wods={fakeWods} />)
    // const pageScreens = [<WodSubScreen wods={fakeWods} />, <WodSubScreen wods={fakeWods} />, <WodSubScreen wods={fakeWods} />]
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
        <Touchable iosType='opacity' onPress={() => this.props.navigation.navigate('WebView', { url })} viewStyle={styles.rsvp}>
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

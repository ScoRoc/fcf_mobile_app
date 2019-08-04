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
      // console.log('secondPageX: ', secondPageX())
        return secondPageX();
      case x > width() * 1.5 && x < width() * 2.5:
        // console.log('thirdPageX: ', thirdPageX())
        return thirdPageX();
    }
  }

  isFirstDayOfCurrentWeek = day => {
    const weekStart = moment().startOf('isoweek');
    return moment(weekStart).isSame( moment(day).format() );
  }

  isWodWeekForCurrentWeek = wodWeek => this.isFirstDayOfCurrentWeek(wodWeek.weekOf)

  makeWodCompoment = wod => {
    // console.log('wod: ', wod)
    const momentedDate = moment(wod.date)
    const dayName = momentedDate.format('dddd');
    const monthDate = momentedDate.format('M');
    const dayDate = momentedDate.format('D');
    const wodDate = `${dayName} ${monthDate}/${dayDate}`;
    return <Wod key={wod._id} text={wod.text} wodDate={wodDate} />
  }
  makeWodFromWodWeek = wodWeek => wodWeek.wods.map(wod => this.makeWodCompoment(wod));

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
    // console.log('this.state.currentWodWeek: ', this.state.currentWodWeek);
    // console.log('this.state.pastWodWeeks: ', this.state.pastWodWeeks);
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

    const currentWodComponents = currentWodWeek ? currentWodWeek.wods.map(wod => this.makeWodCompoment(wod)) : [];
    const pastWods = pastWodWeeks.map(this.makeWodFromWodWeek)
    const pageScreens = Object.values(getPages).map((page, i) => (
      <WodSubScreen key={i + page.title} wods={i === 0 ? currentWodComponents : pastWods} />
    ));
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

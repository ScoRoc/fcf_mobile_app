// Libraries
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Linking, StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';
// Components
import HorizontalPagingScroller from '../../components/HorizontalPagingScroller';
import Touchable from '../../components/Touchable';
import Wod from './Wod';
import WodSubScreen from './WodSubScreen';
// Helpers
import wodPages from './wod-pages';
import useAxios from '../../utils-OLD/axios-helpers';
import { urlHostName } from '../../utils-OLD/global-variables';
// Variables
import { white, yellow } from '../../style-sheet';

const path = `${urlHostName}/wodweek`;
const { getWithAxios } = useAxios(path);

const url = 'https://fcf.sites.zenplanner.com/calendar.cfm';

const WodScreen = props => {
  // State
  const [currentPage, setCurrentPage] = useState(wodPages[0]);
  const [currentWodWeek, setCurrentWodWeek] = useState(null);
  const [pastWodWeeks, setPastWodWeeks] = useState([]);
  const [scrolledViaPress, setScrolledViaPress] = useState(false);

  // Effects
  useEffect(() => {
    getWithAxios().then(result => {
      const { wodWeeks } = result.data;
      const [currentWodWeek, pastWodWeeks] = getCurrentAndPastWodWeeks(wodWeeks);
      // SHOULD CHECK FOR MULTIPLE WEEKS IN CURRENT WEEK
      setCurrentWodWeek(currentWodWeek[0]);
      setPastWodWeeks(pastWodWeeks);
    });
  }, []);

  const getCurrentAndPastWodWeeks = wodWeeks => {
    const currentAndPastWodWeeks = wodWeeks.reduce(
      (acc, wodWeek) => {
        return isWodWeekForCurrentWeek(wodWeek)
          ? [[...acc[0].concat(wodWeek)], acc[1]]
          : [acc[0], [...acc[1].concat(wodWeek)]];
      },
      [[], []],
    );
    return currentAndPastWodWeeks;
  };

  const getPageByX = x => {
    return wodPages.filter(page => {
      return x > page.lowerScrollBounds && x < page.upperScrollBounds;
    })[0];
  };

  const handleScroll = e => {
    if (!scrolledViaPress) {
      const { x } = e.nativeEvent.contentOffset;
      const newPage = getPageByX(x);
      setCurrentPage(newPage);
    }
  };

  const handleTitlePress = ({ i, title }) => {
    setCurrentPage(wodPages[i]);
    setScrolledViaPress(true);
  };

  const isFirstDayOfCurrentWeek = day => {
    const weekStart = moment().startOf('isoweek');
    return moment(weekStart).isSame(moment(day).format());
  };

  const isWodWeekForCurrentWeek = wodWeek => isFirstDayOfCurrentWeek(wodWeek.weekOf);

  const makeWodCompoment = wod => {
    const momentedDate = moment(wod.date);
    const dayName = momentedDate.format('dddd');
    const monthDate = momentedDate.format('M');
    const dayDate = momentedDate.format('D');
    const wodDate = `${dayName} ${monthDate}/${dayDate}`;
    return <Wod key={wod._id} text={wod.text} wodDate={wodDate} />;
  };
  const makeWodFromWodWeek = wodWeek => wodWeek.wods.map(makeWodCompoment);

  const blackBG = () => EStyleSheet.value('$blackBG');
  const blueGradDark = () => EStyleSheet.value('$blueGradDark');

  const monday = moment().startOf('isoweek');
  const mondayMonth = monday.format('MMMM');
  const mondayDate = monday.format('Do');
  const width = () => EStyleSheet.value('$width');
  const padding = width() * 0.1;
  const selectedColor = yellow;
  const unselectedColor = white;

  const currentWodComponents = currentWodWeek ? currentWodWeek.wods.map(makeWodCompoment) : [];
  const pastWods = pastWodWeeks.map(makeWodFromWodWeek);
  const pages = wodPages.map((page, i) => {
    page.component = () => (
      <WodSubScreen key={i + page.title} wods={i === 0 ? currentWodComponents : pastWods} />
    );
    return page;
  });
  return (
    <View style={styles.screen}>
      <StatusBar barStyle='light-content' />

      <Text style={[styles.headerText, { paddingLeft: padding }]}>WOD</Text>

      <HorizontalPagingScroller
        currentPage={currentPage}
        onMomentumScrollEnd={() => setScrolledViaPress(false)}
        onScroll={handleScroll}
        onTitlePress={handleTitlePress}
        pages={pages}
        selectedColor={yellow}
        styles={null}
        titleScrollEnabled={false}
        unselectedColor={white}
      />

      {/* <Touchable iosType='opacity' onPress={() => Linking.openURL('spotify://app')} viewStyle={styles.rsvp}> */}
      <Touchable
        iosType='opacity'
        onPress={() => props.navigation.navigate('WebView', { url })}
        viewStyle={styles.rsvp}
      >
        <Text style={styles.rsvpText}>RSVP</Text>
      </Touchable>
    </View>
  );
};

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
  },
});

WodScreen.navigationOptions = {
  header: null,
};

WodScreen.propTypes = {
  //
};

WodScreen.defaultProps = {
  //
};

export default WodScreen;

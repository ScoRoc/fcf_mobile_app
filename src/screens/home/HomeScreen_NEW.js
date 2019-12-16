// Libraries
import React, { useState } from 'react';
import { Button, Linking, StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';
// Components
import HorizontalPagingScroller from '../../components/HorizontalPagingScroller';
import Touchable from '../../components/Touchable'
// Utils
import useAxios from '../../utils/axios-helpers';
// Variables
import { white, yellow } from '../../utils/style-sheet';
import { urlHostName } from '../../utils/global-variables';
// String Constants
import { ANNOUNCEMENTS, EVENTS, WIDTH_$ } from '../../utils/stringConstants';
// Pages
import homePages from './home-pages';

const path = `${urlHostName}/wodweek`;
const { getWithAxios } = useAxios(path);

const url = 'https://fcf.sites.zenplanner.com/calendar.cfm';

const HomeScreen_NEW = props => {
  // State
  const [currentPage, setCurrentPage] = useState(homePages[0])
  const [scrolledViaPress, setScrolledViaPress] = useState(false);

  const getPageByX = x => {
    return homePages.filter(page => {
      return x > page.lowerScrollBounds && x < page.upperScrollBounds;
    })[0];
  }

  const handleTitlePress = ({ i, title }) => {
    setCurrentPage(homePages[i]);
    setScrolledViaPress(true);
  }

  const handleScroll = e => {
    if (!scrolledViaPress) {
      const { x } = e.nativeEvent.contentOffset;
      const newPage = getPageByX(x);
      setCurrentPage(newPage);
    }
  }

  const blackBG = () => EStyleSheet.value('$blackBG');
  const blueGradDark = () => EStyleSheet.value('$blueGradDark');

  const width = () => EStyleSheet.value('$width');
  const padding = width() * .1;

  return (
    <View style={styles.screen}>
      <StatusBar barStyle='light-content' />

      <HorizontalPagingScroller
        currentPage={currentPage}
        onMomentumScrollEnd={() => setScrolledViaPress(false)}
        onScroll={handleScroll}
        onTitlePress={handleTitlePress}
        pages={homePages}
        selectedColor={yellow}
        styles={null}
        titleScrollEnabled={false}
        unselectedColor={white}
      />

    </View>
  );
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

HomeScreen_NEW.navigationOptions = {
  header: null,
}

export default HomeScreen_NEW;

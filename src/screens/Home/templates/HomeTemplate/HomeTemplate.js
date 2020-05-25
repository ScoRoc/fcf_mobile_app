// Libraries
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
// import { Button, Linking, StatusBar, Text, View } from 'react-native';
import moment from 'moment';
// Atoms
import { Box, Text } from 'atoms';
// Organisms
import PageCarousel from 'organisms/PageCarousel';
// Components
// import HorizontalPagingScroller from '../../components/HorizontalPagingScroller';
// import Touchable from '../../components/Touchable'
// // Utils
// import useAxios from '../../utils/axios-helpers';
// // Variables
// import { white, yellow } from '../../style-sheet';
// import { urlHostName } from '../../utils/global-variables';
// // String Constants
// import { ANNOUNCEMENTS, EVENTS, WIDTH_$ } from '../../utils/stringConstants';
// // Pages
// import homePages from './home-pages';

// const path = `${urlHostName}/wodweek`;
// const { getWithAxios } = useAxios(path);

// const url = 'https://fcf.sites.zenplanner.com/calendar.cfm';

const HomeTemplate = ({ children, ...props }) => {
  // State
  // const [currentPage, setCurrentPage] = useState(homePages[0])
  // const [scrolledViaPress, setScrolledViaPress] = useState(false);

  // const getPageByX = x => {
  //   return homePages.filter(page => {
  //     return x > page.lowerScrollBounds && x < page.upperScrollBounds;
  //   })[0];
  // }

  // const handleTitlePress = ({ i, title }) => {
  //   setCurrentPage(homePages[i]);
  //   setScrolledViaPress(true);
  // }

  // const handleScroll = e => {
  //   if (!scrolledViaPress) {
  //     const { x } = e.nativeEvent.contentOffset;
  //     const newPage = getPageByX(x);
  //     setCurrentPage(newPage);
  //   }
  // }

  return (
    <Box backgroundColor='honeydew' flex={1} paddingTop={65}>
      <StatusBar barStyle='light-content' />

      <Text color='indigo'>Yo, HomeTemplate</Text>

      <PageCarousel flex={1}>
        <Box bg='blue' flex={1}>
          <Text>item 1</Text>
        </Box>
        <Box flex={1}>
          <Text>item 2</Text>
        </Box>
        <Box bg='green' flex={1}>
          <Text>item 3</Text>
        </Box>
        <Box flex={1}>
          <Text>item 4</Text>
        </Box>
        <Box flex={1}>
          <Text>item 5</Text>
        </Box>
      </PageCarousel>

      {/* <HorizontalPagingScroller
        currentPage={currentPage}
        onMomentumScrollEnd={() => setScrolledViaPress(false)}
        onScroll={handleScroll}
        onTitlePress={handleTitlePress}
        pages={homePages}
        selectedColor={yellow}
        styles={null}
        titleScrollEnabled={false}
        unselectedColor={white}
      /> */}
    </Box>
  );
};

HomeTemplate.navigationOptions = {
  header: null,
};

export default HomeTemplate;

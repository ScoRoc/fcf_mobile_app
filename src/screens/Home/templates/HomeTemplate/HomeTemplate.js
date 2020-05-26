// Libraries
import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import moment from 'moment';
// Atoms
import { Box, Text } from 'atoms';
// Organisms
import PageCarousel from 'organisms/PageCarousel';
// Home Organisms
import { Announcements, Events } from '../../organisms';
import EventsScreen from '../../../../screens-OLD/events/EventsScreen';
import HomeScreen from '../../../../screens-OLD/home/HomeScreen';

// const url = 'https://fcf.sites.zenplanner.com/calendar.cfm';

// Context

export const HomeContext = createContext({});

// HomeTemplate

const HomeTemplate = ({ announcements, children, navigation, route, ...props }) => {
  console.log('announcements in HomeTemplate: ', announcements);

  return (
    <HomeContext.Provider value={{ navigation, route }}>
      <Box backgroundColor='darkgrey' flex={1} paddingTop={60}>
        <StatusBar barStyle='light-content' />

        <Text color='indigo' fontSize={40} marginBottom={20} marginLeft={10}>
          What's Happenin, C
        </Text>

        <PageCarousel
          flex={1}
          // onTitlePress={() => console.log('pressed')}
          showSlider
          styles={{ titleTextStyle: { activeColor: 'yellow', inActiveColor: 'black' } }}
          titles={['Announcements', 'Events']}
        >
          <Announcements
            announcements={announcements?.data ? Object.values(announcements.data) : []}
          />
          <Events />
          {/* <HomeScreen /> */}
          {/* <EventsScreen /> */}
        </PageCarousel>
      </Box>
    </HomeContext.Provider>
  );
};

HomeTemplate.navigationOptions = {
  header: null,
};

HomeTemplate.propTypes = {
  announcements: PropTypes.object.isRequired,
  navigation: PropTypes.object, // react-navigation navigation object
  route: PropTypes.object, // react-navigation route object
};

HomeTemplate.defaultProps = {
  announcements: {},
  navigation: null,
  route: null,
};

export default HomeTemplate;

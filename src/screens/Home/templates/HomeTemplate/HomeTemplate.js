// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
// import { Button, Linking, StatusBar, Text, View } from 'react-native';
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

const HomeTemplate = ({ announcements, children, ...props }) => {
  console.log('announcements in HomeTemplate: ', announcements);

  return (
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
  );
};

HomeTemplate.navigationOptions = {
  header: null,
};

HomeTemplate.propTypes = {
  announcements: PropTypes.object.isRequired,
};

HomeTemplate.defaultProps = {
  announcements: {},
};

export default HomeTemplate;

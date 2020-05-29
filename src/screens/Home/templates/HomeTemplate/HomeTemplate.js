// Libraries
import React from 'react';
import { StatusBar } from 'react-native';
// Atoms
import { Box, Text } from 'atoms';
// Organisms
import PageCarousel from 'organisms/PageCarousel';
// Home Context
import HomeContext from 'home-screen/logic/HomeLogic/HomeContext';
// Home Organisms
import { Announcements, Events } from '../../organisms';
import EventsScreen from '../../../../screens-OLD/events/EventsScreen';
import HomeScreen from '../../../../screens-OLD/home/HomeScreen';

// const url = 'https://fcf.sites.zenplanner.com/calendar.cfm';

// HomeTemplate

const HomeTemplate = () => {
  return (
    <Box backgroundColor='darkgrey' flex={1} paddingTop={60}>
      <StatusBar barStyle='light-content' />

      <Text color='indigo' fontSize={40} marginBottom={20} marginLeft={10}>
        What's Happenin, C
      </Text>

      <PageCarousel
        flex={1}
        showSlider
        styles={{ titleTextStyle: { activeColor: 'yellow', inActiveColor: 'black' } }}
        titles={['Announcements', 'Events']}
      >
        <Announcements context={HomeContext} />
        <Events context={HomeContext} />
        {/* <HomeScreen /> */}
        {/* <EventsScreen /> */}
      </PageCarousel>
    </Box>
  );
};

HomeTemplate.navigationOptions = {
  header: null,
};

export default HomeTemplate;

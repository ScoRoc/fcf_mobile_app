// Libraries
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
// Atoms
import { Box, Text } from 'atoms';
// Organisms
import PageCarousel from 'organisms/PageCarousel';
// Screens
import Announcements from 'announcements-screen';
import Events from 'events-screen';
// import EventsScreen from '../../../../screens-OLD/events/EventsScreen';
// import HomeScreen from '../../../../screens-OLD/home/HomeScreen';
// Constants
import EVENT_TYPES from '../../constants/eventTypes';

// const url = 'https://fcf.sites.zenplanner.com/calendar.cfm';

// HomeTemplate

const HomeTemplate = ({
  announcementProps: {
    announcementSocket,
    getAnnouncements,
    onAnnouncementStripPress,
    setAnnouncement,
    viewAnnouncement,
  },
  eventProps: { eventSocket, getEvents, getEventTypes, onEventStripPress, setEvent, viewEvent },
  onHomeLoad,
  ...props
}) => {
  // Effects

  useEffect(() => {
    onHomeLoad?.();
    console.log('calling useEffect on home page...');
  }, []);

  // Announcements and Events have slightly different implementations
  // That's why Announcements takes a context prop, but Events does not
  // Seeing which I like better
  // TODO make them consistent once everything is done
  return (
    <Box backgroundColor='darkgrey' flex={1} paddingTop={60}>
      <StatusBar barStyle='light-content' />

      <Text color='indigo' fontSize={40} marginBottom={20} marginLeft={10}>
        What's Happenin', C
      </Text>

      <PageCarousel
        flex={1}
        showSlider
        styles={{ titleTextStyle: { activeColor: 'yellow', inActiveColor: 'black' } }}
        titles={['Announcements', 'Events']}
      >
        <Announcements
          getAnnouncements={getAnnouncements}
          onStripPress={onAnnouncementStripPress}
          setAnnouncement={setAnnouncement}
          socket={announcementSocket}
          viewAnnouncement={viewAnnouncement}
        />
        <Events
          eventTypes={EVENT_TYPES}
          getEvents={getEvents}
          getEvents={getEvents}
          getEventTypes={getEventTypes}
          onStripPress={onEventStripPress}
          setEvent={setEvent}
          socket={eventSocket}
          viewEvent={viewEvent}
        />
        {/* <HomeScreen /> */}
        {/* <EventsScreen /> */}
      </PageCarousel>
    </Box>
  );
};

HomeTemplate.propTypes = {
  onHomeLoad: PropTypes.func,
};

HomeTemplate.defaultProps = {
  onHomeLoad: null,
};

HomeTemplate.navigationOptions = {
  header: null,
};

export default HomeTemplate;

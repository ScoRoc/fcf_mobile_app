// Libraries
import React, { useEffect, useGlobal } from 'reactn';
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
import eventTypes from '../../constants/eventTypes';

// const url = 'https://fcf.sites.zenplanner.com/calendar.cfm';

// HomeTemplate

const HomeTemplate = ({
  announcementProps: {
    announcementsSocket,
    getAnnouncements,
    onAnnouncementStripPress,
    onLegendKeyPress,
    setAnnouncement,
    viewAnnouncement,
  },
  eventProps: { eventsSocket, getEvents, onEventStripPress, setEvent, viewEvent },
  onHomeLoad,
  ...props
}) => {
  // Global

  const [{ selectedEventTypes }] = useGlobal('events');

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
          socket={announcementsSocket}
          viewAnnouncement={viewAnnouncement}
        />
        <Events
          eventTypes={eventTypes}
          getEvents={getEvents}
          getEvents={getEvents}
          onLegendKeyPress={onLegendKeyPress}
          onStripPress={onEventStripPress}
          selectedEventTypes={selectedEventTypes}
          setEvent={setEvent}
          socket={eventsSocket}
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

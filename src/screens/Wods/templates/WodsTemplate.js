// Libraries
import React, { useEffect, useGlobal } from 'reactn';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
// Atoms
import { Box, Text, TouchableIOSHighlight } from 'atoms';
// Wods Organisms
import { WodsList } from '../organisms';

// const url = 'https://fcf.sites.zenplanner.com/calendar.cfm';

// WodsTemplate

const WodsTemplate = ({
  getCurrentWeekWods,
  // announcementProps: {
  //   announcementsSocket,
  //   getAnnouncements,
  //   onAnnouncementStripPress,
  //   onLegendKeyPress,
  //   setAnnouncement,
  //   viewAnnouncement,
  // },
  // eventProps: { eventsSocket, getEvents, onEventStripPress, setEvent, viewEvent },
  // onHomeLoad,
  ...props
}) => {
  // Global

  const [wodsState] = useGlobal('wodsState');

  // Effects

  // useEffect(() => {
  //   onHomeLoad?.();
  //   console.log('calling useEffect on home page...');
  // }, []);

  // Announcements and Events have slightly different implementations
  // That's why Announcements takes a context prop, but Events does not
  // Seeing which I like better
  // TODO make them consistent once everything is done
  return (
    <Box backgroundColor='darkslategrey' flex={1} paddingTop={60}>
      <StatusBar barStyle='light-content' />

      <Text color='deeppink' fontSize={30} marginBottom={20} marginLeft={10} textAlign='center'>
        This Week's Workouts
      </Text>

      <WodsList flex={1} wods={wodsState.data.currentWeekWods} />

      <TouchableIOSHighlight
        backgroundColor='lightsalmon'
        onPress={() => console.log('pressed RSVP')}
        paddingBottom={2}
        paddingTop={2}
        width='100%'
      >
        <Text fontSize={30} textAlign='center'>
          RSVP
        </Text>
      </TouchableIOSHighlight>
    </Box>
  );
};

WodsTemplate.propTypes = {
  onHomeLoad: PropTypes.func,
};

WodsTemplate.defaultProps = {
  onHomeLoad: null,
};

WodsTemplate.navigationOptions = {
  header: null,
};

export default WodsTemplate;

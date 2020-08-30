// Libraries
import React, { useEffect, useGlobal } from 'reactn';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
// Atoms
import { Box, Text, TouchableIOSHighlight } from 'atoms';
// Wods Organisms
import { WodsList } from '../organisms';
// Wods Context
import WodsContext from '../logic/WodsContext';

// const url = 'https://fcf.sites.zenplanner.com/calendar.cfm';

// WodsTemplate

const WodsTemplate = ({ getCurrentWeekWods, handleLike, onRsvpPress, ...props }) => {
  // Global

  const [wodsState] = useGlobal('wodsState');

  return (
    <WodsContext.Provider value={{ getCurrentWeekWods, handleLike }}>
      <Box backgroundColor='darkslategrey' flex={1} paddingTop={60} {...props}>
        <StatusBar barStyle='light-content' />

        <Text color='deeppink' fontSize={30} marginBottom={20} marginLeft={10} textAlign='center'>
          This Week's Workouts
        </Text>

        <WodsList flex={1} wods={wodsState.data.currentWeekWods} />

        <TouchableIOSHighlight
          backgroundColor='lightsalmon'
          onPress={onRsvpPress}
          paddingBottom={2}
          paddingTop={2}
          width='100%'
        >
          <Text fontSize={30} textAlign='center'>
            RSVP
          </Text>
        </TouchableIOSHighlight>
      </Box>
    </WodsContext.Provider>
  );
};

WodsTemplate.propTypes = {
  getCurrentWeekWods: PropTypes.func.isRequired,
  handleLike: PropTypes.func,
  onRsvpPress: PropTypes.func.isRequired,
};

WodsTemplate.defaultProps = {
  getCurrentWeekWods: null,
  handleLike: null,
  onRsvpPress: null,
};

WodsTemplate.navigationOptions = {
  header: null,
};

export default WodsTemplate;

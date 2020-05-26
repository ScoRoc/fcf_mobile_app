// Libraries
import React, { useState } from 'react';
import { Dimensions, RefreshControl, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
// Atoms
import { Box, Scrollview, Text } from 'atoms';
// Announcement Organisms
import { AnnouncementStrip } from './organisms';

// Announcements

const Announcements = ({ announcements }) => {
  // State

  const [refreshing, setRefreshing] = useState(false);

  // Functions

  const onRefresh = () => {
    console.log('onRefresh...');
    // setRefreshing(true);
    // getWithAxios().then(result => {
    //   setAnnouncements(result.data.announcements.reverse());
    //   setRefreshing(false);
    // });
  };

  // Components

  const announcementStrips =
    announcements &&
    announcements.map(announcement => {
      return (
        <AnnouncementStrip
          announcement={announcement}
          // finishUpdate={() => setUpdated(false)}
          // imgHeight={imgHeight}
          // imgWidth={imgWidth}
          key={announcement._id}
          // padding={padding}
          // updateAnnouncement={updateAnnouncement}
          // updated={updated}
        />
      );
    });

  // Return

  return (
    <Box backgroundColor='green' flex={1} paddingtop={50}>
      <StatusBar barStyle={'light-content'} />
      <Scrollview
        refreshControl={
          <RefreshControl
            colors={['red']}
            onRefresh={onRefresh}
            refreshing={refreshing}
            tintColor={'red'}
          />
        }
      >
        {announcementStrips}
      </Scrollview>
    </Box>
  );
};

Announcements.propTypes = {
  announcements: PropTypes.arrayOf(
    PropTypes.object,
    // PropTypes.shape({
    // announcement shape
    // }), // TODO should this be required ??
  ),
};

Announcements.defaultProps = {
  announcements: null,
};

export default Announcements;

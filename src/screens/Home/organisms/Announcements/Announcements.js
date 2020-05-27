// Libraries
import React, { useGlobal, useState } from 'reactn';
import { Dimensions, RefreshControl, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
// Atoms
import { Box, Scrollview, Text } from 'atoms';
// Announcement Organisms
import { AnnouncementStrip } from './organisms';

// Announcements

const Announcements = ({ announcements, getAnnouncements }) => {
  const [allAnnouncements] = useGlobal('announcements');
  // State

  const [refreshing, setRefreshing] = useState(false);

  // Functions

  const onRefresh = async () => {
    console.log('onRefresh...');
    setRefreshing(true);
    await getAnnouncements();
    setRefreshing(false);
    console.log('allAnnouncements: ', allAnnouncements);
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
          // onImgDoublePress={() => console.log('double...')}
          // onImgPress={() => console.log('single...')}
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
  getAnnouncements: PropTypes.func.isRequired,
};

Announcements.defaultProps = {
  announcements: null,
  getAnnouncements: null,
};

export default Announcements;

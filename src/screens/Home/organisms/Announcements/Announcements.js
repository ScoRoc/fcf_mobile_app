// Libraries
import React, { useContext, useEffect, useGlobal, useState } from 'reactn';
import { RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
// Atoms
import { Box, Scrollview } from 'atoms';
// Announcement Molecules
import { AnnouncementStrip } from './molecules';
// Constants
import { NAV } from 'utils/constants';

// Announcements

const Announcements = ({ context, ...props }) => {
  // Global

  const [announcements] = useGlobal('announcements');
  const [user] = useGlobal('user');

  // State

  const [refreshing, setRefreshing] = useState(false);

  // Context

  const {
    announcementContext: { getAnnouncements, setAnnouncement, socket, viewAnnouncement },
    navigation,
  } = useContext(context);

  // Effects

  useEffect(() => {
    socket.on('invalidLike', msg => console.log('msg: ', msg));
    // TODO verify is other sockets are receiving an update here
    socket.on('newLike', announcement => setAnnouncement({ announcement }));
  }, []);

  // Functions

  const handleLike = ({ announcement, e }) => {
    announcement.likedBy.includes(user._id)
      ? announcement.likedBy.splice(announcement.likedBy.indexOf(user._id), 1)
      : announcement.likedBy.push(user._id);
    setAnnouncement({ announcement });
    socket.emit('like', { announcementId: announcement._id, userId: user._id });
  };

  const handleStripPress = ({ announcement, e }) => {
    navigation.navigate(NAV.WEB_VIEW, { url: announcement.url });
    if (!announcement.viewedBy.includes(user._id)) {
      viewAnnouncement({ announcementId: announcement._id, viewedByUserId: user._id });
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await getAnnouncements();
    setRefreshing(false);
  };

  // Announcement Strips

  const announcementStrips = announcements?.data
    ? Object.values(announcements.data).map(announcement => {
        return (
          <AnnouncementStrip
            announcement={announcement}
            onLike={handleLike}
            onPress={handleStripPress}
            key={announcement._id}
          />
        );
      })
    : [];

  // Return

  return (
    <Box backgroundColor='green' flex={1} paddingtop={50}>
      <Scrollview
        refreshControl={
          <RefreshControl
            colors={['red']}
            onRefresh={handleRefresh}
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

Announcements.propType = {
  context: PropTypes.element.isRequired, // TODO context element ??
};

Announcements.defaultProps = {
  context: null,
};

export default Announcements;

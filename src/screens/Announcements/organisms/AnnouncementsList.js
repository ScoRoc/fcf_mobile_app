// Libraries
import React, { useContext, useState } from 'react';
import { RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
// Atoms
import { Scrollview } from 'atoms';
// Announcement Molecules
import { AnnouncementStrip } from '../molecules';
// Announcements Context
import AnnouncementsContext from 'announcements-screen/logic/AnnouncementsContext';

// AnnouncementsList

const AnnouncementsList = ({ announcements, onStripPress, user }) => {
  // State

  const [refreshing, setRefreshing] = useState(false);

  // Context

  const { getAnnouncements, setAnnouncement, socket, viewAnnouncement } = useContext(
    AnnouncementsContext,
  );

  // Functions

  const handleLike = ({ announcement, e }) => {
    announcement.likedBy.includes(user._id)
      ? announcement.likedBy.splice(announcement.likedBy.indexOf(user._id), 1)
      : announcement.likedBy.push(user._id);
    setAnnouncement({ announcement });
    socket.emit('like', { announcementId: announcement._id, userId: user._id });
  };

  const handleStripPress = ({ announcement, e }) => {
    onStripPress?.({ announcement });
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

  const announcementStrips = announcements.map(announcement => {
    return (
      <AnnouncementStrip
        announcement={announcement}
        onLike={handleLike}
        onPress={handleStripPress}
        key={announcement._id}
      />
    );
  });

  // Return

  return (
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
  );
};

AnnouncementsList.propTypes = {
  announcements: PropTypes.array,
  onStripPress: PropTypes.func,
  user: PropTypes.object,
};

AnnouncementsList.defaultProps = {
  announcements: null,
  onStripPress: null,
  user: null,
};

export default AnnouncementsList;

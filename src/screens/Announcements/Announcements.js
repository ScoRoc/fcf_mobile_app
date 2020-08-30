// Libraries
import React, { useEffect, useGlobal } from 'reactn';
import PropTypes from 'prop-types';
// Atoms
import { Box } from 'atoms';
// Announcements Context
import AnnouncementsContext from './logic/AnnouncementsContext';
// Announcements Organisms
import AnnouncementList from './organisms/AnnouncementsList';

// Announcements

const Announcements = ({
  getAnnouncements,
  onStripPress,
  setAnnouncement,
  socket,
  viewAnnouncement,
  ...props
}) => {
  // Global

  const [announcementsState] = useGlobal('announcementsState');
  const [user] = useGlobal('user');

  // Effects

  useEffect(() => {
    socket.on('invalidLike', msg => console.log('msg: ', msg));
    // TODO verify is other sockets are receiving an update here
    socket.on('likeUpdate', announcement => setAnnouncement({ announcement }));
  }, []);

  // Return

  return (
    <AnnouncementsContext.Provider
      value={{
        getAnnouncements,
        setAnnouncement,
        socket,
        viewAnnouncement,
      }}
    >
      <Box backgroundColor='green' flex={1} paddingtop={50}>
        <AnnouncementList
          announcements={Object.values(announcementsState.data.announcements)}
          onStripPress={onStripPress}
          user={user}
        />
      </Box>
    </AnnouncementsContext.Provider>
  );
};

Announcements.propType = {
  getAnnouncements: PropTypes.func.isRequired,
  onStripPress: PropTypes.func,
  setAnnouncement: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired,
  viewAnnouncement: PropTypes.func.isRequired,
};

Announcements.defaultProps = {
  getAnnouncements: null,
  onStripPress: null,
  setAnnouncement: null,
  socket: null,
  viewAnnouncement: null,
};

export default Announcements;

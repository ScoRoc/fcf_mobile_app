export default {
  setAnnouncement: async (globalState, dispatch, { announcement }) => {
    console.log('announcement in setAnnouncement: ', announcement);
    await dispatch.setCacheAt({
      data: {
        ...globalState.announcements,
        data: { ...globalState.announcements.data, [announcement._id]: announcement },
      },
      key: 'announcements',
    });
    return {
      announcements: {
        data: { ...globalState.announcements.data, [announcement._id]: announcement },
        // announcements:
        // direction === QUERY_STRING.DIRECTION.DESC.value
        //   ? [announcement, ...globalState.announcements.data]
        //   : [...globalState.announcements.data, announcement],
      },
    };
  },
  setAnnouncements: async (globalState, dispatch, { announcements }) => {
    const announcementData = announcements.reduce((_announcements, announcement) => {
      _announcements[announcement._id] = announcement;
      return _announcements;
    }, {});

    const newAnnouncementsState = {
      ...globalState.announcements,
      data: announcementData,
      // direction: direction || globalState.announcements.direction,
    };

    await dispatch.setCacheAt({ data: newAnnouncementsState, key: 'announcements' });
    return { announcements: newAnnouncementsState };
  },
};

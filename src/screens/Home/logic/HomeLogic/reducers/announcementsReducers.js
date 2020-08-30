export default {
  setAnnouncement: async (globalState, dispatch, { announcement }) => {
    console.log('announcement in setAnnouncement: ', announcement);
    await dispatch.setCacheAt({
      data: {
        ...globalState.cache.announcements,
        [announcement._id]: announcement,
      },
      key: 'announcements',
    });
    return {
      announcementsState: {
        ...globalState.announcementsState,
        data: {
          ...globalState.announcementsState.data,
          announcements: {
            ...globalState.announcementsState.data.announcements,
            [announcement._id]: announcement,
          },
        },
      },
    };
  },
  setAnnouncements: async (globalState, dispatch, { announcements: _announcements }) => {
    const announcements = _announcements.reduce((allAnnouncements, announcement) => {
      allAnnouncements[announcement._id] = announcement;
      return allAnnouncements;
    }, {});

    const newAnnouncementsState = {
      ...globalState.announcementsState,
      data: {
        ...globalState.announcementsState.data,
        announcements,
      },
      // direction: direction || globalState.announcements.direction,
    };

    await dispatch.setCacheAt({
      data: { ...globalState.cache.announcements, ...announcements },
      key: 'announcements',
    });
    return { announcementsState: newAnnouncementsState };
  },
};

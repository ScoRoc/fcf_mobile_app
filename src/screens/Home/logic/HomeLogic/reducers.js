// Constants
// import { API, PATHS, QUERY_STRING } from 'utils/constants';

const homeReducers = {
  // removeAnnouncement: async (globalState, dispatch, _id) => {
  //   const cachedAnnouncements = globalState.cache.announcements;
  //   delete cachedAnnouncements[_id];
  //   await dispatch.setCache({ data: cachedAnnouncements, key: 'announcements' });
  //   const { announcements } = globalState;
  //   delete announcements.data[_id];
  //   return { announcements };
  // },
  setAnnouncement: async (globalState, dispatch, { announcement }) => {
    console.log('announcement in setAnnouncement: ', announcement);
    await dispatch.setCache({
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

    await dispatch.setCache({ data: newAnnouncementsState, key: 'announcements' });
    return { announcements: newAnnouncementsState };
  },
};

export default homeReducers;

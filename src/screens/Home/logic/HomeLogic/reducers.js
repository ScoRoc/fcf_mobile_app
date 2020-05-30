// Constants
// import { API, PATHS, QUERY_STRING } from 'utils/constants';

const homeReducers = {
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
  setEvent: async (globalState, dispatch, { event }) => {
    console.log('event in setEvent: ', event);
    await dispatch.setCache({
      data: {
        ...globalState.events,
        data: { ...globalState.events.data, [event._id]: event },
      },
      key: 'events',
    });
    return {
      events: {
        data: { ...globalState.events.data, [event._id]: event },
        // events:
        // direction === QUERY_STRING.DIRECTION.DESC.value
        //   ? [event, ...globalState.events.data]
        //   : [...globalState.events.data, event],
      },
    };
  },
  setEvents: async (globalState, dispatch, { events }) => {
    const eventData = events.reduce((_events, event) => {
      _events[event._id] = event;
      return _events;
    }, {});

    const newEventsState = {
      ...globalState.events,
      data: eventData,
      // direction: direction || globalState.events.direction,
    };

    await dispatch.setCache({ data: newEventsState, key: 'events' });
    return { events: newEventsState };
  },
};

export default homeReducers;

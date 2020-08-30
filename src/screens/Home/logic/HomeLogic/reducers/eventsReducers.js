export default {
  setEvent: async (globalState, dispatch, { event }) => {
    await dispatch.setCacheAt({
      data: {
        ...globalState.cache.events,
        [event._id]: event,
      },
      key: 'events',
    });
    return {
      eventsState: {
        ...globalState.eventsState,
        data: {
          ...globalState.eventsState.data,
          events: {
            ...globalState.eventsState.data.events,
            [event._id]: event,
          },
        },
      },
    };
  },
  setEvents: async (globalState, dispatch, { events: _events }) => {
    const events = _events.reduce((allEvents, event) => {
      allEvents[event._id] = event;
      return allEvents;
    }, {});

    const newEventsState = {
      ...globalState.eventsState,
      data: {
        ...globalState.eventsState.data,
        events,
      },
      // direction: direction || globalState.events.direction,
    };

    await dispatch.setCacheAt({ data: { ...globalState.cache.events, ...events }, key: 'events' });
    return { eventsState: newEventsState };
  },
  setEventTypes: async (globalState, dispatch, { selectedEventTypes }) => {
    const newEventsState = { ...globalState.eventsState, selectedEventTypes };
    return { eventsState: newEventsState };
  },
};

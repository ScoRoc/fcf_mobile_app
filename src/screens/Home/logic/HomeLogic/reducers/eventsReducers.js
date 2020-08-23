export default {
  setEvent: async (globalState, dispatch, { event }) => {
    await dispatch.setCacheAt({
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

    await dispatch.setCacheAt({ data: newEventsState, key: 'events' });
    return { events: newEventsState };
  },
};

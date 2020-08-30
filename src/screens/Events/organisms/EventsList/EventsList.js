// Libraries
import React, { useContext, useGlobal, useState } from 'reactn';
import { RefreshControl, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
// Event Organisms
import EventStrip from '../EventStrip/EventStrip';
// EventsList Molecules
import SectionHeader from './molecules/SectionHeader';
// Events Context
import EventsContext from 'events-screen/logic/EventsContext';

const getEventsWithSelectedTypes = ({ events, selectedEventTypes }) =>
  Object.values(events).filter(event => selectedEventTypes.includes(event.type));

// EventsList

const EventsList = ({ onStripPress, ...props }) => {
  // Global

  const [eventsState] = useGlobal('eventsState');

  // State

  const [refreshing, setRefreshing] = useState(false);

  // Context

  const { getEvents } = useContext(EventsContext);

  // Functions

  const handleRefresh = async () => {
    setRefreshing(true);
    await getEvents();
    setRefreshing(false);
  };

  // SectionList Parts

  const createItem = ({ item }) => (
    <EventStrip event={item} key={item._id} onStripPress={onStripPress} />
  );

  const createSectionHeader = ({ section }) => <SectionHeader title={section.title} />;

  const createSections = events => {
    const months = events.reduce((months, event) => {
      const monthName = moment(event.startDate).format('MMMM');
      const year = moment(event.startDate).format('YYYY');
      const monthYear = `${monthName} ${year}`;
      const month = months[monthYear] ? months[monthYear].concat(event) : [event];
      return { ...months, [monthYear]: month };
    }, {});
    return Object.entries(months).map(([key, val]) => ({ data: val, title: key }));
  };

  const sections = createSections(
    getEventsWithSelectedTypes({
      events: eventsState.data.events,
      selectedEventTypes: eventsState.selectedEventTypes,
    }),
  );

  return (
    <SectionList
      keyExtractor={item => item._id}
      refreshControl={
        <RefreshControl
          colors={['red']}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          tintColor={'red'}
        />
      }
      renderItem={createItem}
      renderSectionHeader={createSectionHeader}
      sections={sections}
      {...props}
    />
  );
};

EventsList.propTypes = {
  onStripPress: PropTypes.func,
};

EventsList.defaultProps = {
  onStripPress: null,
};

export default EventsList;

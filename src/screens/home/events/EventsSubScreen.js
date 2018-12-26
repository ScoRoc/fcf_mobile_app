import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import eventKeys from './event-keys';

import EventsKey from './EventsKey';
import EventStrip from './EventStrip';

const date = new Date();
const month = date.toLocaleString('en-us', {month: 'long'});
const year = date.toLocaleString('en-us', {year: 'numeric'});
const { getKeys } = eventKeys();

//////////////////////////////
const fakeEvents = () => {
  const fakeEventsObj = {
    one: {
      date: '3',
      title: 'Drinks at Optimism',
      type: 'social',
    },
    two: {
      date: '8',
      throughDate: 'Dec 15',
      title: 'Cancer Drive',
      type: 'community',
    },
    three: {
      date: '11',
      title: '5k Run for ABC',
      type: 'competition',
    },
    four: {
      date: '17',
      throughDate: 'Dec 22',
      title: 'Another Comp Event',
      type: 'competition',
    },
    five: {
      date: '22',
      title: 'Another Social Event',
      type: 'social',
    },
    six: {
      date: '26',
      title: 'Another Community Event',
      type: 'community',
    },
  };
  const eventTypes = ['social', 'competition', 'community'];
  return {
    getAllEventTypes: (() => eventTypes)(),
    getDateByTitle: title => fakeEventsObj[Object.keys(fakeEventsObj).find(key => fakeEventsObj[key].title === title)].date,
    getEvents: (() => fakeEventsObj)(),
    getEventsByType: type => Object.entries(fakeEventsObj).filter(entry => entry[1].type === type),
    // getEventsByTypes: types => Object.entries(fakeEventsObj).filter(entry => Object.values(entry[1]).some(item => types.indexOf(item) >= 0)),
    getEventsByTypes: types => Object.entries(fakeEventsObj).filter(entry => {
      return Object.values(entry[1]).some(item => {
        // console.log('types: ', types)
        return types.indexOf(item) >= 0;
      })
    }),
    getEventTitles: (() => Object.values(fakeEventsObj).map(event => event.title))(),
    getThroughDateByTitle: title => fakeEventsObj[Object.keys(fakeEventsObj).find(key => fakeEventsObj[key].title === title)].throughDate,
    getTypeByTitle: title => fakeEventsObj[Object.keys(fakeEventsObj).find(key => fakeEventsObj[key].title === title)].type,

  }
};
const {
  getAllEventTypes,
  getDateByTitle,
  getEventsByType,
  getEventsByTypes,
  getEvents,
  getEventTitles,
  getThroughDateByTitle,
  getTypeByTitle
} = fakeEvents();
//////////////////////////////

export default class EventsSubScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventTypes: [],
      removedTypes: [],
    };
  }

  getRemovedTypes = type => {
    const { removedTypes } = this.state;
    const updated = removedTypes.includes(type)
                  ? removedTypes.splice(removedTypes.indexOf(type), 1)
                  : removedTypes.push(type);
    return removedTypes;
  }

  filterEventTypes = type => {
    const filteredTypes = this.state.eventTypes;
    const included = filteredTypes.includes(type);
    const removedTypes = included
                        ? filteredTypes.splice(filteredTypes.indexOf(type), 1)
                        : filteredTypes.splice(filteredTypes.length - 1, 0, type);

    this.setState({eventTypes: filteredTypes, removedTypes: this.getRemovedTypes(type)});
  }

  componentDidMount() {
    this.setState({eventTypes: getAllEventTypes});
  }

  render() {
    const { eventTypes, removedTypes } = this.state;
    const width = () => EStyleSheet.value('$width');
    ///////
    const events = getEventsByTypes(eventTypes).map((event, i) => {
      const [key, value] = event;
      const type = getTypeByTitle(value.title);
      const eventKey = getKeys[type];
      return (
        <EventStrip
          color={eventKey.color()}
          date={value.date}
          dateObj={date}
          key={i}
          library={eventKey.library}
          name={eventKey.name}
          throughDate={value.throughDate}
          title={value.title}
        />
      )
    });
    ///////
    return (
      <View style={[styles.screen, {width: width()}]}>
        <EventsKey filterEventTypes={this.filterEventTypes} removedTypes={removedTypes} />
        <View style={styles.monthWrapper}>
          <Text style={styles.monthText}>{month} {year}</Text>
        </View>
        {/* MAKE FLAT LIST FOR EACH MONTH SO ITS SCROLLABLE LIST DOWN TO EACH MONTH */}
        <ScrollView>
          {events}
        </ScrollView>
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  $monthPadding: '7rem',
  screen: {
    // paddingTop: '$padding',
    // flex: 1,
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  monthWrapper: {
    paddingTop: '$monthPadding',
    paddingBottom: '$monthPadding',
    backgroundColor: '$greyMedium',
    alignItems: 'center',
  },
  monthText: {
    color: '$white',
    fontSize: '30rem'
  }
});

import React from 'react';
import { Button, ScrollView, SectionList, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import EventsKey from './EventsKey';
import EventStrip from './EventStrip';

import eventKeys from './event-keys';

import { getIndex } from '../../../utils/helpers';
import useAxios from '../../../utils/axios-helpers';
import { apiUrl } from '../../../utils/global-variables';

const path = `${apiUrl}/events/bymonth`;
const { getWithAxios } = useAxios(path);

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
    getAllEvents: (() => fakeEventsObj)(),
    getAllEventTypes: (() => eventTypes)(),
    getEventsByTypes: types => Object.entries(fakeEventsObj).filter(entry => Object.values(entry[1]).some(item => types.indexOf(item) >= 0)),
    getTypeByTitle: title => fakeEventsObj[Object.keys(fakeEventsObj).find(key => fakeEventsObj[key].title === title)].type,
  };
};
const {
  getAllEvents,
  getAllEventTypes,
  getEventsByTypes,
  getTypeByTitle
} = fakeEvents();

const monthMap = {
  jan: { num: 0, title: 'January' },
  feb: { num: 1, title: 'February' },
};

const monthEvents = () => {
  const eventsArr = [
    {
      month: 'January',
      events: [
        {
          date: '3',
          id: 0,
          title: 'Drinks at Optimism',
          type: 'social',
        },
        {
          date: '8',
          id: 1,
          throughDate: 'Dec 15',
          title: 'Cancer Drive',
          type: 'community',
        },
        {
          date: '11',
          id: 2,
          title: '5k Run for ABC',
          type: 'competition',
        },
        {
          date: '17',
          id: 3,
          throughDate: 'Dec 22',
          title: 'Another Comp Event',
          type: 'competition',
        },
        {
          date: '22',
          id: 4,
          title: 'Another Social Event',
          type: 'social',
        },
        {
          date: '26',
          id: 5,
          title: 'Another Community Event',
          type: 'community',
        },
      ],
    },
    {
      month: 'February',
      events: [
        {
          date: '3',
          id: 0,
          title: 'Drinks at Optimism',
          type: 'social',
        },
        {
          date: '8',
          id: 1,
          throughDate: 'Dec 15',
          title: 'Cancer Drive',
          type: 'community',
        },
        {
          date: '11',
          id: 2,
          title: '5k Run for ABC',
          type: 'competition',
        },
        {
          date: '17',
          id: 3,
          throughDate: 'Dec 22',
          title: 'Another Comp Event',
          type: 'competition',
        },
        {
          date: '22',
          id: 4,
          title: 'Another Social Event',
          type: 'social',
        },
        {
          date: '26',
          id: 5,
          title: 'Another Community Event',
          type: 'community',
        },
      ],
    }
  ];
  return {
    getAllMonthData: (() => eventsArr)(),
  }
};
const { getAllMonthData } = monthEvents();
// console.log('month data: ', getAllMonthData)
// console.log(getAllMonthData[0].events);
//////////////////////////////

export default class EventsSubScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
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
    const removedTypes = filteredTypes.includes(type)
                        ? filteredTypes.splice(filteredTypes.indexOf(type), 1)
                        : filteredTypes.splice(filteredTypes.length - 1, 0, type);

    this.setState({eventTypes: filteredTypes, removedTypes: this.getRemovedTypes(type)});
  }

  componentDidMount() {
    this.setState({eventTypes: getAllEventTypes});
    getWithAxios().then(result => {
      // console.log('sortedEvents: ', result.data.sortedEvents);
      this.setState({ events: result.data.sortedEvents });
    })
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
        <ScrollView>
          {events}
        </ScrollView>
        {/* <SectionList
          sections={[
            { title: getAllMonthData[0].month, data: getAllMonthData[0].events },
            { title: getAllMonthData[1].month, data: getAllMonthData[1].events },
          ]}
          renderItem={({item}) => {
            // console.log('item: ', item)
            const eventKey = getKeys[item.type];
            return  (
                      <EventStrip
                        color={eventKey.color()}
                        date={item.date}
                        dateObj={date}
                        library={eventKey.library}
                        name={eventKey.name}
                        throughDate={item.throughDate}
                        title={item.title}
                      />
                    );
          }}
          renderSectionHeader={({section}) => {
            // console.log('section: ', section)
              return  <View style={styles.monthWrapper}>
                        <Text style={styles.monthText}>{section.title}</Text>
                      </View>
          }}
          keyExtractor={item => item.id}
        /> */}
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
    // marginBottom: '30rem',
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

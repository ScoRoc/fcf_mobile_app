import React from 'react';
import { Button, ScrollView, SectionList, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';

import EventsKey from './EventsKey';
import EventStrip from './EventStrip';

import eventKeys from './event-keys';

import { getIndex } from '../../../utils/helpers';
import useAxios from '../../../utils/axios-helpers';
import { apiUrl } from '../../../utils/global-variables';

const path = `${apiUrl}/events/bymonth`;
const { getWithAxios } = useAxios(path);

const { getEventKeys, getEventTypes } = eventKeys();

export default class EventsSubScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
      eventTypes: [],
      removedTypes: [],
    };
  }

  updateTypesArray = (type, arr) => {
    return arr.includes(type) ? arr.filter(i => i !== type) : arr.concat(type);
  }

  filterEventTypes = type => {
    const { eventTypes, removedTypes } = this.state;
    this.setState({ eventTypes: this.updateTypesArray(type, eventTypes), removedTypes: this.updateTypesArray(type, removedTypes) });
  }

  componentDidMount() {
    getWithAxios().then(result => {
      this.setState({ events: result.data.sortedEvents, eventTypes: getEventTypes });
    });
  }

  render() {
    const { eventTypes, removedTypes } = this.state;
    const width = () => EStyleSheet.value('$width');
    const monthsSections = this.state.events
                          ? this.state.events.map(month => {
                              const filteredEvents = month.events.filter(event => {
                                return eventTypes.includes(event.type);
                              });
                              return { title: month.month, data: filteredEvents }
                            })
                          : null;
    const sectionList = this.state.events
                      ? <SectionList
                          sections={monthsSections}
                          renderItem={({item}) => {
                            const eventKey = getEventKeys[item.type];
                            return  (
                                      <EventStrip
                                        color={eventKey.color()}
                                        library={eventKey.library}
                                        name={eventKey.name}
                                        startDate={moment(item.startDate)}
                                        throughDate={moment(item.throughDate)}
                                        title={item.eventText}
                                      />
                                    );
                          }}
                          renderSectionHeader={({section}) => {
                              return  <View style={styles.monthWrapper}>
                                        <Text style={styles.monthText}>{section.title}</Text>
                                      </View>
                          }}
                          keyExtractor={item => item._id}
                        />
                        : null;
    return (
      <View style={[styles.screen, {width: width()}]}>
        <EventsKey filterEventTypes={this.filterEventTypes} removedTypes={removedTypes} />
        {sectionList}
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

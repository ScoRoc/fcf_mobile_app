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

const date = new Date();
const month = date.toLocaleString('en-us', {month: 'long'});
const year = date.toLocaleString('en-us', {year: 'numeric'});
const { getKeys } = eventKeys();

export default class EventsSubScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
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
    getWithAxios().then(result => {
      // console.log('sortedEvents: ', result.data.sortedEvents);
      this.setState({ events: result.data.sortedEvents });
    })
  }

  render() {
    const { eventTypes, removedTypes } = this.state;
    const width = () => EStyleSheet.value('$width');
    const monthsSections = this.state.events
                              ? this.state.events.map(month => {
                                  return { title: month.month, data: month.events }
                                })
                              : null;
    const sectionList = this.state.events
                      ? <SectionList
                          sections={monthsSections}
                          renderItem={({item}) => {
                            const eventKey = getKeys[item.types[0]];
                            return  (
                                      <EventStrip
                                        color={eventKey.color()}
                                        date={ moment(item.startDate).date() }
                                        dateObj={date}
                                        library={eventKey.library}
                                        name={eventKey.name}
                                        throughDate={item.throughDate}
                                        title={item.eventText}
                                      />
                                    );
                          }}
                          renderSectionHeader={({section}) => {
                            // console.log('section: ', section)
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

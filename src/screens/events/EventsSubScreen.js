import React from 'react';
import { Button, ScrollView, RefreshControl, SectionList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment'
import io from 'socket.io-client'
import EStyleSheet from 'react-native-extended-stylesheet';

import EventsKey from './EventsKey';
import EventStrip from './EventStrip';

import eventKeys from './event-keys';

import { getIndex } from '../../utils/helpers';
import useAxios from '../../utils/axios-helpers';
import { urlHostName } from '../../utils/global-variables';

const path = '/events'
const url = `${urlHostName}${path}`
const urlSortByMonth = `${url}?sort=bymonth`
const { getWithAxios } = useAxios(urlSortByMonth);

const eventSocket = io(url)

const { getEventKeys, getEventTypes } = eventKeys();

class EventsSubScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventTypes: [],
      refreshing: false,
      removedTypes: [],
      updated: false,
    };
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    getWithAxios().then(result => {
      this.setState({ events: result.data.sortedEvents, refreshing: false });
    });
  }

  updateEvent = ({ eventId, userId }, title) => {
    const events = this.state.events.slice(0);
    const monthIdx = events.indexOf( events.find(month => month.month === title) );
    const event = events[monthIdx].events.find(event => event._id === eventId);
    const { likes } = event;
    likes.includes(userId)
      ? likes.splice( likes.indexOf(userId), 1 )
      : likes.push(userId);
    this.setState({ events, updated: true });
  }

  isActiveType = event => this.state.eventTypes.includes(event.type);

  createMonthSection = month => ({ title: month.month, data: month.events.filter(this.isActiveType) });
  createSectionItem = ({ item, i, section }) => {
    const eventKey = getEventKeys[item.type];
    return <EventStrip
              event={item}
              eventKey={eventKey}
              finishUpdate={() => this.setState({ updated: false})}
              updated={this.state.updated}
              updateEvent={data => this.updateEvent(data, section.title)}
            />;
  }
  createSectionHeader = ({ section }) => (
    <View style={styles.monthWrapper}>
      <Text style={styles.monthText}>{section.title}</Text>
    </View>
  );

  toggleTypeInArray = (type, arr) => {
    return arr.includes(type) ? arr.filter(i => i !== type) : arr.concat(type);
  }

  filterEventTypes = type => {
    const { eventTypes, removedTypes } = this.state;
    this.setState({ eventTypes: this.toggleTypeInArray(type, eventTypes), removedTypes: this.toggleTypeInArray(type, removedTypes) });
  }

  componentDidMount() {
    eventSocket.on('eventLikeUpdate', data => {
      const { event, userId } = data
      const eventMonth = moment(event.startDate).format('YYYY') === moment().year()
                                                      ? momentedEvent.format('MMMM')
                                                      : `${moment(event.startDate).format('MMMM')} ${moment(event.startDate).format('YYYY')}`
      const userIdFromRedux = this.props.user._id
      if (userId !== userIdFromRedux) {
        const { events } = this.state
        const updateMonthEvents = (month, updatedEvent) => {
          const updatedEvents = month.events.map(mappedEvent => {
            return mappedEvent._id === updatedEvent._id
                                      ? updatedEvent
                                      : mappedEvent
          })
          return { ...month, events: updatedEvents }
        }
        const newEvents = events.map(month => {
          return month.month === eventMonth ? updateMonthEvents(month, event) : month
        })
        this.setState({ events: newEvents })
      }
    })
    getWithAxios().then(result => {
      this.setState({ events: result.data.sortedEvents, eventTypes: getEventTypes });
    });
  }

  componentWillUnmount() {
    eventSocket.close()
  }

  render() {
    const { events, eventTypes, removedTypes } = this.state;
    const width = () => EStyleSheet.value('$width');
    const yellow = () => EStyleSheet.value('$yellow');
    const sections = events.map(this.createMonthSection);
    const sectionList = <SectionList
                          sections={sections}
                          refreshControl={
                            <RefreshControl
                              colors={[yellow]}
                              onRefresh={this.onRefresh}
                              refreshing={this.state.refreshing}
                              tintColor={yellow()}
                            />
                          }
                          renderItem={this.createSectionItem}
                          renderSectionHeader={this.createSectionHeader}
                          keyExtractor={item => item._id}
                        />;
    return (
      <View style={[styles.screen, {width: width()}]}>
        <EventsKey filterEventTypes={this.filterEventTypes} removedTypes={removedTypes} />
        {sectionList}
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  $monthPadding: '7rem',

  screen: {
    // marginBottom: '50rem',
    // paddingTop: '$padding',
    flex: 1,
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
  },
});

const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(EventsSubScreen)

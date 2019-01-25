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

const { getEventKeys, getEventTypes } = eventKeys();

export default class EventsSubScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventTypes: [],
      removedTypes: [],
    };
  }

  isActiveType = event => this.state.eventTypes.includes(event.type);

  createMonthSection = month => ({ title: month.month, data: month.events.filter(this.isActiveType) });
  createSectionItem = ({ item }) => {
    const eventKey = getEventKeys[item.type];
    return <EventStrip event={item} eventKey={eventKey} />;
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
    getWithAxios().then(result => {
      this.setState({ events: result.data.sortedEvents, eventTypes: getEventTypes });
    });
  }

  render() {
    const { events, eventTypes, removedTypes } = this.state;
    const width = () => EStyleSheet.value('$width');
    const sections = events.map(this.createMonthSection);
    const sectionList = <SectionList
                          sections={sections}
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

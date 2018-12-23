import React from 'react';
import { Text, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import WodCardWrapper from './WodCardWrapper';

import { height, width } from '../../variables/variables';
const interval = width * .75;
const inset = width * .25;

//////////////////////////////////
const wodsObj = () => {
  const wods = {
    monday: {
      day: 'Monday',
    },
    tuesday: {
      day: 'Tuesday',
    },
    wednesday: {
      day: 'Wednesday',
    },
    thursday: {
      day: 'Thursday',
    },
    friday: {
      day: 'Friday',
    },
    saturday: {
      day: 'Saturday',
    },
    sunday: {
      day: 'Sunday 12/23',
    },
  };
  return {
    allWods: (() => wods)(),
  }
};
const { allWods } = wodsObj();
//////////////////////////////////


export default class WodSubScreen extends React.Component {

  findScrollTo = day => {
    const dayMap = {
      Monday: 0,
      Tuesday: interval,
      Wednesday: interval * 2,
      Thursday: interval * 3,
      Friday: interval * 4,
      Saturday: interval * 5,
      Sunday: interval * 6,
    };
    return dayMap[day];
  }

  componentDidMount() {
    const date = new Date();
    const today = date.toLocaleString('en-us', {weekday: 'long'});
    this.scrollView.scrollTo({x: this.findScrollTo(today)});
  }

  render() {
    const wods = Object.entries(allWods).map((wod, i) => {
      const [key, value] = wod;
      return <WodCardWrapper day={value.day} key={i} />
    });
    return (
      <ScrollView
        ref={scrollView => this.scrollView = scrollView}
        contentInset={{right: inset}}
        snapToInterval={interval}
        snapToAlignment='start'
        decelerationRage='fast'
        horizontal={true}
        style={styles.view}
      >
        {wods}
      </ScrollView>
    );
  }
};

const styles = EStyleSheet.create({
  view: {
    paddingLeft: '$width * .15',
    paddingRight: '$width * .15',
  },
});

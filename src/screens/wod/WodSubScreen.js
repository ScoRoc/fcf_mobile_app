import React from 'react';
import { Text, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';

import WodCardWrapper from './WodCardWrapper';

import useAxios from '../../utils/axios-helpers';
import { apiUrl } from '../../utils/global-variables';

const path = `${apiUrl}/wodweek`;
const { getWithAxios } = useAxios(path);

export default class WodSubScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentWodWeek: {},
      wodWeeks: [],
    }
  }

  interval = () => EStyleSheet.value('$width') * 0.75;

  inset = () => EStyleSheet.value('$width') * 0.25;

  findScrollTo = day => {
    const dayMap = {
      Monday: 0,
      Tuesday: this.interval(),
      Wednesday: this.interval() * 2,
      Thursday: this.interval() * 3,
      Friday: this.interval() * 4,
      Saturday: this.interval() * 5,
      Sunday: this.interval() * 6,
    };
    return dayMap[day];
  }

  scrollToToday = () => {
    const today = moment().format('dddd');
    this.scrollView.scrollTo({ x: this.findScrollTo(today), animated: false });
  }

  filterForCurrentWeek = wodWeek => {
    const weekStart = moment().startOf('isoweek');
    return moment(weekStart).isSame( moment(wodWeek.weekOf) );
  }

  componentDidMount() {
    getWithAxios().then(result => {
      console.log('result.data: ', result.data);
      const { wodWeeks } = result.data;
      const currentWodWeek = wodWeeks.filter(this.filterForCurrentWeek)[0];
      this.setState({ currentWodWeek, wodWeeks });
      this.scrollToToday();
    });
  }

  render() {
    const wods = this.state.currentWodWeek.wods
                ? this.state.currentWodWeek.wods.map(wod => {
                    return <WodCardWrapper key={wod._id} wod={wod} />;
                  })
                : null;
    return (
      <ScrollView
        ref={scrollView => this.scrollView = scrollView}
        contentInset={{right: this.inset()}}
        snapToInterval={this.interval()}
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

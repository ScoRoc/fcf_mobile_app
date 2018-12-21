import React from 'react';
import { Text, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import WodTile from './WodTile';

import { height, width } from '../../variables/variables';
const interval = width * .75;
const inset = width * .25;

export default WodSubScreen = props => {
  return (
    <ScrollView
      contentInset={{right: inset}}
      snapToInterval={interval}
      snapToAlignment='start'
      decelerationRage='fast'
      horizontal={true}
      style={styles.view}
    >
      <WodTile />
      <WodTile />
      <WodTile />
      <WodTile />
      <WodTile />
      <WodTile />
      <WodTile />
    </ScrollView>
  );
};

const styles = EStyleSheet.create({
  view: {
    paddingLeft: '$width * .15',
    paddingRight: '$width * .15',
    backgroundColor: 'slateblue',
  },
});

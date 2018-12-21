import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import WodCard from './WodCard';

export default WodCardWrapper = props => {
  return (
    <View style={styles.view}>
      <View style={styles.titleView}>
        <Text style={styles.title}>{props.day}</Text>
      </View>
      <View style={styles.cardWrapper}>
        <WodCard />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  $padding: '45rem',
  view: {
    width: '$width * .7',
    marginRight: '$width * .05',
    backgroundColor: 'orchid',
  },
  titleView: {
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
  title: {
    fontSize: '30rem'
  },
  cardWrapper: {
    flex: 1,
    paddingTop: '$padding',
    paddingBottom: '$padding',
    justifyContent: 'center',
  },
});

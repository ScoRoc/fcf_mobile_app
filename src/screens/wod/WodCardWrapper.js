import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import WodCard from './WodCard';

export default WodCardWrapper = props => {
  return (
    <View style={styles.view}>
      <View style={styles.cardWrapper}>
        <WodCard day={props.day} />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  $padding: '45rem',
  view: {
    width: '$width * .7',
    marginRight: '$width * .05',
  },
  titleView: {
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$greyMedium',
  },
  title: {
    color: '$white',
    fontSize: '30rem'
  },
  cardWrapper: {
    flex: 1,
    paddingTop: '$padding',
    paddingBottom: '$padding',
    justifyContent: 'center',
  },
});

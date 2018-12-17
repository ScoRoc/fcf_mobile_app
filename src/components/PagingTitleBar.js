import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from './Touchable';

export default PagingTitleBar = props => {
  const { pageTitles, scrollEnabled } = props;
  const titles = pageTitles.map((title, i) => (
    <Touchable onPress={() => console.log('pressed')} iosType='opacity' key={i}>
      <Text>{title}</Text>
    </Touchable>
  ));
  return (
    <View>
      <ScrollView
        scrollEnabled={scrollEnabled}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {titles}
      </ScrollView>
    </View>
  )
};

const styles = EStyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: 'pink',
  },
});

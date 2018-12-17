import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default PagingTitleBar = props => {
  const { pageTitles } = props;
  const titles = pageTitles.map((title, i) => (
    <Text key={i}>{title}</Text>
  ))
  return (
    <View>
      <ScrollView
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

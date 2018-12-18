import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from './Touchable';

export default PagingTitleBar = props => {
  const { currentPage, pageTitles, scrollEnabled } = props;
  const titles = pageTitles.map((title, i) => {
    const color = currentPage === title ? 'limegreen' : 'white';
    const handlePress = i === 0
                      ? props.scrollToBeginning
                      : i === pageTitles.length - 1
                      ? props.scrollToEnd
                      : () => console.log('pressed');
    return (
      <Touchable onPress={handlePress} iosType='opacity' key={i}>
        <View style={[styles.view, {borderBottomColor: color}]}>
          <Text style={[styles.text, {color}]}>{title}</Text>
        </View>
      </Touchable>
    )
  });
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
  view: {
    paddingBottom: '3rem',
    borderBottomWidth: '2rem',
  },
  text: {
    color: 'white',
    fontSize: '30rem',
  },
  scrollView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: 'purple',
  },
});

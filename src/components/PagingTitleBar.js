import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from './Touchable';

export default PagingTitleBar = props => {
  const {
    currentPage,
    pageTitles,
    scrollTo,
    scrollEnabled,
    scrollToBeginning,
    scrollToEnd,
    scrollViewWrapperStyle,
    textStyle,
    textWrapperStyle,
  } = props;
  const selectedColor = typeof props.selectedColor === 'string' ? props.selectedColor : props.selectedColor();
  const unselectedColor = typeof props.unselectedColor === 'string' ? props.unselectedColor : props.unselectedColor();
  const titles = pageTitles.map((title, i) => {
    const color = currentPage === title ? selectedColor : unselectedColor;
    const handlePress = i === 0
                      ? scrollToBeginning
                      : i === pageTitles.length - 1
                        ? scrollToEnd
                        : () => scrollTo(title);
    return (
      <Touchable
        iosType='opacity'
        key={title + i}
        onPress={handlePress}
        viewStyle={[ styles.view, { borderBottomColor: color }, textWrapperStyle ]}
      >
        <Text style={[ styles.text, { color }, textStyle ]}>{title}</Text>
      </Touchable>
    )
  });
  return (
    <View>
      <ScrollView
        contentContainerStyle={[ styles.scrollView, scrollViewWrapperStyle ]}
        horizontal={true}
        scrollEnabled={scrollEnabled}
        showsHorizontalScrollIndicator={false}
      >
        {titles}
      </ScrollView>
    </View>
  );
}

const styles = EStyleSheet.create({
  view: {
    paddingBottom: '3rem',
    borderBottomWidth: '2rem',
  },
  text: {
    color: 'white',
    fontSize: '20rem',
  },
  scrollView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: '$blackBG',
  },
});

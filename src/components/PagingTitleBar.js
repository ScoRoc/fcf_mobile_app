// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Button, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// Components
import Touchable from './Touchable';
// String Constants
import { OPACITY, STRING } from '../utils-OLD/stringConstants';
// Variables
import { white, yellow } from '../style-sheet';

const PagingTitleBar = props => {
  // Components
  const titles = props.pageTitles.map((title, i) => {
    const color = props.currentPage.title === title ? props.selectedColor : props.unselectedColor;
    return (
      <Touchable
        iosType={OPACITY}
        key={title + i}
        onPress={() => props.onPress({ i, title })}
        viewStyle={[
          styles.view,
          { borderBottomColor: color },
          props.styles && props.styles.titleTouchable,
        ]}
      >
        <Text style={[styles.text, { color }, props.styles && props.styles.titleText]}>
          {title}
        </Text>
      </Touchable>
    );
  });

  return (
    <View>
      <ScrollView
        contentContainerStyle={[styles.scrollView, props.styles && props.styles.scrollView]}
        horizontal={true}
        scrollEnabled={props.scrollEnabled}
        showsHorizontalScrollIndicator={false}
      >
        {titles}
      </ScrollView>
    </View>
  );
};

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

PagingTitleBar.propTypes = {
  currentPage: PropTypes.object,
  onPress: PropTypes.func,
  pageTitles: PropTypes.arrayOf(PropTypes.string),
  scrollEnabled: PropTypes.bool,
  selectedColor: PropTypes.string,
  styles: PropTypes.object,
  unselectedColor: PropTypes.string,
};

PagingTitleBar.defaultProps = {
  currentPage: null,
  onPress: null,
  pageTitles: null,
  scrollEnabled: true,
  selectedColor: yellow,
  styles: null,
  unselectedColor: white,
};

export default PagingTitleBar;

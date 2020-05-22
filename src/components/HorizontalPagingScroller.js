// Libraries
import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
// Components
import PagingTitleBar from './PagingTitleBar'
// Variables
import { white, yellow } from '../style-sheet';

const HorizontalPagingScroller = props => {
  // Refs
  const scrollView = useRef(null);

  // Functions
  const handlePress = ({ i, title }) => {
    scrollView.current.scrollTo({ x: props.pages[i].lowerVisibleBounds });
    props.onTitlePress({ i, title });
  }

  const pages = props.pages.map((Page, i) => {
    console.log('Page: ', Page)
      return <View key={`${i}key`} style={styles.screen}>
        <Page.component />
      </View>
  });
  return (
    <View style={styles.page}>
      <PagingTitleBar
        currentPage={props.currentPage}
        onPress={handlePress}
        pageTitles={props.pages.map(screen => screen.title)}
        scrollEnabled={props.titleScrollEnabled}
        selectedColor={props.selectedColor}
        styles={props.styles}
        unselectedColor={props.unselectedColor}
      />
      <ScrollView
        horizontal
        onMomentumScrollEnd={props.onMomentumScrollEnd}
        onScroll={e => props.onScroll(e)}
        pagingEnabled
        ref={scrollView}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {pages}
      </ScrollView>
    </View>
  );
}

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    width: '$width',
  },
  screen: {
    // width: '100%',
  },
});

HorizontalPagingScroller.propTypes = {
  currentPage: PropTypes.object,
  onMomentumScrollEnd: PropTypes.func,
  onScroll: PropTypes.func,
  onTitlePress: PropTypes.func,
  pages: PropTypes.arrayOf(PropTypes.object),
  selectedColor: PropTypes.string,
  styles: PropTypes.object,
  titleScrollEnabled: PropTypes.bool,
  unselectedColor: PropTypes.string,
}

HorizontalPagingScroller.defaultProps = {
  currentPage: null,
  onMomentumScrollEnd: null,
  onScroll: null,
  onTitlePress: null,
  pages: null,
  selectedColor: yellow,
  styles: null,
  titleScrollEnabled: true,
  unselectedColor: white,
}

export default HorizontalPagingScroller;

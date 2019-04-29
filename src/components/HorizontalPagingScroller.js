import React from 'react'
import { ScrollView, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

import PagingTitleBar from './PagingTitleBar'

export default class HorizontalPagingScroller extends React.Component {

  scrollTo = title => {
    const scrollToValue = this.props.xScrollToValues[title]();
    this.scrollView.scrollTo({ x: scrollToValue });
    this.props.scrollTo(scrollToValue);
  }

  scrollToBeginning = () => {
    this.scrollView.scrollTo({ x: 0 });
    this.props.scrollToBeginning();
  }

  scrollToEnd = () => {
    this.scrollView.scrollToEnd();
    this.props.scrollToEnd();
  }

  render() {
    const {
      children,
      currentPage,
      handleMomentumScrollEnd,
      handleScroll,
      pagingBarScrollViewWrapperStyle,
      pagingBarTextStyle,
      pagingBarTextWrapperStyle,
      pageTitles,
      selectedColor,
      unselectedColor,
    } = this.props;
    return (
      <View style={styles.page}>
        <PagingTitleBar
          currentPage={currentPage}
          pageTitles={pageTitles}
          scrollTo={this.scrollTo}
          scrollEnabled={false}
          scrollToBeginning={this.scrollToBeginning}
          scrollToEnd={this.scrollToEnd}
          scrollViewWrapperStyle={pagingBarScrollViewWrapperStyle}
          selectedColor={selectedColor}
          unselectedColor={unselectedColor}
          textStyle={pagingBarTextStyle}
          textWrapperStyle={pagingBarTextWrapperStyle}
        />
        <ScrollView
          horizontal
          onMomentumScrollEnd={handleMomentumScrollEnd}
          onScroll={e => handleScroll(e)}
          pagingEnabled
          ref={ref => this.scrollView = ref}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  page: {
    height: '100%',
  },
});

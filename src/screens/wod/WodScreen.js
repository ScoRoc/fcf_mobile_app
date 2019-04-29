import React from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';

import HorizontalPagingScroller from '../../components/HorizontalPagingScroller'
import WodSubScreen from './WodSubScreen';

import wodPages, { firstPageX, secondPageX, thirdPageX, xScrollToValues } from './wod-pages'

const { getPageTitleByXValue, getPageTitles } = wodPages();

export default class WodScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'This week',
      scrolledViaPress: false,
    }
  }

  getXpage = x => {
    const width = () => EStyleSheet.value('$width');
    switch (true) {
      case x < width() / 2:
        return firstPageX();
      case x > width() / 2 && x < width() * 1.5:
      console.log('secondPageX: ', secondPageX())
        return secondPageX();
      case x > width() * 1.5 && x < width() * 2.5:
        console.log('thirdPageX: ', thirdPageX())
        return thirdPageX();
    }
  }

  scrollTo = x => {
    const xPage = this.getXpage(x);
    this.setState({ scrolledViaPress: true, currentPage: getPageTitleByXValue(xPage) });
  }

  scrollToBeginning = () => {
    this.setState({ scrolledViaPress: true, currentPage: getPageTitles[0] });
  }

  scrollToEnd = () => {
    this.setState({ scrolledViaPress: true, currentPage: getPageTitles[ getPageTitles.length - 1 ] });
  }

  handleScroll = e => {
    const { x } = e.nativeEvent.contentOffset;
    const xPage = this.getXpage(x);
    if (!this.state.scrolledViaPress) this.setState({ currentPage: getPageTitleByXValue(xPage) });
  }

  render() {
    const { currentPage } = this.state;
    const blackBG = () => EStyleSheet.value('$blackBG');
    const blueGradDark = () => EStyleSheet.value('$blueGradDark');
    const yellow = () => EStyleSheet.value('$yellow');
    const white = () => EStyleSheet.value('$white');

    const monday = moment().startOf('isoweek');
    const mondayMonth = monday.format('MMMM');
    const mondayDate = monday.format('Do');
    const width = () => EStyleSheet.value('$width');
    const padding = width() * .1;
    const selectedColor = yellow;
    const unselectedColor = white;
    return (
      <View style={styles.screen}>
        <StatusBar barStyle='light-content' />

        <Text style={[ styles.headerText, { paddingLeft: padding } ]}>WOD</Text>

        {/* <WodSubScreen /> */}

        <HorizontalPagingScroller
          currentPage={currentPage}
          handleMomentumScrollEnd={() => this.setState({ scrolledViaPress: false })}
          handleScroll={this.handleScroll}
          pagingBarTextStyle={styles.pagingBarTextStyle}
          pagingBarTextWrapperStyle={styles.pagingBarTextWrapperStyle}
          pagingBarScrollViewWrapperStyle={styles.pagingBarScrollViewWrapperStyle}
          pageTitles={getPageTitles}
          scrollTo={this.scrollTo}
          scrollToBeginning={this.scrollToBeginning}
          scrollToEnd={this.scrollToEnd}
          selectedColor={selectedColor}
          unselectedColor={unselectedColor}
          xScrollToValues={xScrollToValues}
        >
          <View style={{ width: width(), backgroundColor: 'green' }}>
            <Text>one</Text>
          </View>

          <View style={{ width: width(), backgroundColor: 'blue' }}>
            <Text>two</Text>
          </View>

          <View style={{ width: width(), backgroundColor: 'purple' }}>
            <Text>three</Text>
          </View>

        </HorizontalPagingScroller>

      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $pagingBarSpacing: '20rem',

  screen: {
    paddingTop: '65rem',
    flex: 1,
    backgroundColor: '$blackBG',
  },
  headerText: {
    marginBottom: '20rem',
    color: '$white',
    fontSize: '30rem',
  },
  pagingBarScrollViewWrapperStyle: {
    justifyContent: 'flex-start',
  },
  pagingBarTextStyle: {
    fontSize: '18rem',
    padding: 0,
    margin: 0,
  },
  pagingBarTextWrapperStyle: {
    padding: 0,
    margin: 0,
    marginLeft: '$pagingBarSpacing',
    marginRight: '$pagingBarSpacing',
  },
});

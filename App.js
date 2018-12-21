import React from 'react';
import { Dimensions, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

import AppContainer from './src/navigation/navigators';

import { height, tabHeight, width } from './src/variables/variables';

const baseScreenWidth = 375; // from iPhoneX vertical

EStyleSheet.build({
  $height: height,
  $width: width,
  $tabHeight: tabHeight,
  $rem: width / baseScreenWidth,
  $orange: '#ff8e18',
  $darkGray: '#333',
  $pink: '#f3a',
  $brightBlue: '#3ee'
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
};

import React from 'react';
import { Dimensions, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

import AppContainer from './src/navigation/navigators';

import { height, tabHeight, width } from './src/variables/variables';

const baseScreenWidth = 375; // from iPhoneX vertical

EStyleSheet.build({
  $rem: width / baseScreenWidth,

  $height: height,
  $width: width,
  $tabHeight: tabHeight,

  $black: '#000',
  $blackBG: '#141414',
  $blueAccent: '#88BBC8',
  $blueGradDark: '#0a002a',
  $greenAccent: '#93DBA5',
  $greyDark: '#333',
  $greyMedium: '#666',
  $greyMediumDark: '#444',
  $purpleAccent: '#94A1D1',
  $white: '#FFF',
  $yellow: '#FF0',
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

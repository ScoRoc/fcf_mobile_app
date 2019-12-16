// Libraries
import React from 'react';
import { Dimensions, YellowBox } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
// Navigation
import AppContainer from './src/navigation/navigators';
import { enableScreens } from 'react-native-screens';
// StyleSheet
import buildStyleSheet from './src/utils/style-sheet';

buildStyleSheet(); // Init Extended Style Sheet
enableScreens(); // Use Screens for react-navigation

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
};

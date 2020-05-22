// Libraries
import React, { setGlobal, useGlobal } from 'reactn';
import { NavigationContainer } from '@react-navigation/native';
import { YellowBox } from 'react-native';
// Components
import SplashScreen from './src/screens/Splash/SplashScreen';
// Navigators
import AuthNavigator from './src/navigation/AuthNavigator';
import MainTabsNavigator from './src/navigation/MainTabsNavigator';
// StyleSheet
import buildStyleSheet from './src/style-sheet';

buildStyleSheet(); // Init Extended Style Sheet

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
]);

setGlobal({
  isAppLoading: false,
  isLoggingOut: false,
  user: {
    self: null,
    token: null,
  },
});

export default function App() {
  // Global State
  const [isAppLoading] = useGlobal('isLoading');
  const [user] = useGlobal('user');

  // Return
  return isAppLoading ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      {user.token === null ? <AuthNavigator /> : <MainTabsNavigator />}
    </NavigationContainer>
  );
}

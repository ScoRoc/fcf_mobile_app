// Libraries
import React, { addReducers, setGlobal, useGlobal } from 'reactn';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'emotion-theming';
// import { YellowBox } from 'react-native';
// Components
import SplashScreen from './src/screens-OLD/Splash/SplashScreen';
// Navigators
import AuthNavigator from './src/navigation/AuthNavigator';
import MainTabsNavigator from './src/navigation/MainTabsNavigator';
// Reducers
// import homeReducers from './src/screens/Home/logic/HomeLogic/reducers';
// Themes
import themes, { THEME_NAMES } from 'theme/themes';

// TODO delete after refactor (also delete the extended stylesheet package)

// StyleSheet
import buildStyleSheet from './src/style-sheet';

buildStyleSheet(); // Init Extended Style Sheet

// YellowBox.ignoreWarnings([
//   'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
// ]);

setGlobal({
  isAppLoading: false,
  isLoggingOut: false,
  themeName: THEME_NAMES.MAIN,
  user: {
    self: null,
    token: null,
  },
});

addReducers({
  // ...homeReducers,
  //  ...eventReducers,
  //  ...usersReducers,
  //  ...wodToolsReducers,
  //  ...profileReducers,
  // authenticateUser: (globalState, dispatch) => ({ isUserAuthenticated: true }),
  //   clearUser: (globalState, dispatch) => ({ user: null }),
  //   deauthenticateUser: (globalState, dispatch) => ({ isUserAuthenticated: false }),
  //   login: async (globalState, dispatch, user) => {
  //     await dispatch.setUser(user);
  //     await dispatch.authenticateUser();
  //   },
  //   logout: async (globalState, dispatch) => {
  //     await dispatch.clearUser();
  //     await dispatch.deauthenticateUser();
  //   },
  //   setCache: (globalState, dispatch, { data, key }) => {
  //     console.log('key: ', key);
  //     console.log('data: ', data);
  //     return { cache: { ...globalState.cache, [key]: data } };
  //   },
  //   setUser: async (globalState, dispatch, user) => {
  //     await dispatch.setCache({ data: user, key: 'user' });
  //     return { user };
  //   },
  //   // updateUserCache: (globalState, dispatch, user) => ({ // Do I actually need this ???
  //   //   cache: {
  //   //     ...globalState.cache,
  //   //     [user._id]: user,
  //   //   },
  //   // }),
});

export default function App() {
  // Global State
  const [isAppLoading] = useGlobal('isLoading');
  const [themeName] = useGlobal('themeName');
  const [user] = useGlobal('user');

  const theme = themes[themeName];

  // Return
  return (
    <ThemeProvider theme={theme}>
      {isAppLoading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {user.token === null ? <AuthNavigator /> : <MainTabsNavigator />}
        </NavigationContainer>
      )}
    </ThemeProvider>
  );
}

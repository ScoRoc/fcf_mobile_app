// Libraries
import React, { addReducers, setGlobal, useGlobal } from 'reactn';
import addReactNDevTools from 'reactn-devtools';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'emotion-theming';
// import { YellowBox } from 'react-native';
// Components
import SplashScreen from './src/screens-OLD/Splash/SplashScreen';
// Navigators
import AuthNavigator from './src/navigation/AuthNavigator';
import MainNavigator from './src/navigation/MainNavigator';
// Reducers
import announcementsReducers from './src/screens/Home/logic/HomeLogic/reducers/announcementsReducers';
import eventsReducers from './src/screens/Home/logic/HomeLogic/reducers/eventsReducers';
import wodsReducers from './src/screens/Wods/logic/reducers/wodsReducers';
// Themes
import themes, { THEME_NAMES } from 'theme/themes';
// Helpers
import { isAppLoading, isUserLoggedIn } from './src/utils/functions/statuses';
// Constants
import eventTypes from './src/screens/Home/constants/eventTypes';
import { APP_STATUS, LOGIN_STATUS } from './src/utils/constants/status';

// TODO delete after refactor (also delete the extended stylesheet package)

// StyleSheet
import buildStyleSheet from './src/style-sheet';

buildStyleSheet(); // Init Extended Style Sheet

// YellowBox.ignoreWarnings([
//   'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
// ]);

// init ReactN Dev Tools
// TODO does this work? should i just delete associated packages
// npm uninstall react-native-debugger reactn-devtools redux
addReactNDevTools();

setGlobal({
  announcementsState: {
    data: {
      announcements: {},
    },
  },
  appLoadingStatus: APP_STATUS.IDLE,
  cache: {
    announcements: {},
    currentWeekWods: [],
    events: {},
    wods: {},
  },
  eventsState: {
    data: {
      events: {},
    },
    selectedEventTypes: Object.keys(eventTypes),
  },
  loginStatus: LOGIN_STATUS.LOGGED_OUT,
  themeName: THEME_NAMES.MAIN,
  user: {
    self: null,
    token: null,
  },
  wodsState: {
    data: {
      wods: {},
      currentWeekWods: [],
    },
  },
});

addReducers({
  ...announcementsReducers,
  ...eventsReducers,
  ...wodsReducers,
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
  setCacheAt: (globalState, dispatch, { data, key }) => {
    return { cache: { ...globalState.cache, [key]: data } };
  },
  //   setUser: async (globalState, dispatch, user) => {
  //     await dispatch.setCacheAt({ data: user, key: 'user' });
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
  const [appLoadingStatus] = useGlobal('appLoadingStatus');
  const [themeName] = useGlobal('themeName');
  const [user] = useGlobal('user');

  const theme = themes[themeName];

  // Return
  return (
    <ThemeProvider theme={theme}>
      {isAppLoading(appLoadingStatus) ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {/* isUserLoggedIn is returning token === null, must update */}
          {isUserLoggedIn(user?.token) ? <AuthNavigator /> : <MainNavigator />}
        </NavigationContainer>
      )}
    </ThemeProvider>
  );
}

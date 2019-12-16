// Libraries
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
// Components
import CustomDrawer from './CustomDrawer';

import IAPScreen from '../screens/IAPScreen';
import WebViewScreen from '../screens/webview/WebViewScreen';

import BlogScreen from '../screens/blog/BlogScreen';
import ChangePasswordScreen from '../screens/profile/ChangePasswordScreen';
import EventsScreen from '../screens/events/EventsScreen';
import HomeScreen from '../screens/home/HomeScreen';
//
// testing
import HomeScreen_NEW from '../screens/home/HomeScreen_NEW';
//
//
import LoadingScreen from '../screens/auth/LoadingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import PercentTableScreen from '../screens/wod-tools/percent-table/PercentTableScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import UnitConverterScreen from '../screens/wod-tools/unit-converter/UnitConverterScreen';
import WodScreen from '../screens/wod/WodScreen';
import WodToolsScreen from '../screens/wod-tools/WodToolsScreen';
// Style Sheet
import {
  blackBG,
  greyDark,
  greyDarkExtra,
  greyLightDark,
  greyMedium,
  greyMediumDark,
  tabHeight,
  white,
  yellow,
} from '../utils/style-sheet';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen_NEW,
    WebView: WebViewScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: greyDark,
      },
      headerTintColor: white,
      headerTintStyle: {
        fontWeight: 'bold'
      }
    },
  }
);

const WodStack = createStackNavigator(
  {
    Wod: WodScreen,
    WebView: WebViewScreen,
  },
  {
    initialRouteName: 'Wod',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: greyDark,
      },
      headerTintColor: white,
      headerTintStyle: {
        fontWeight: 'bold'
      }
    },
  }
);

const BlogStack = createStackNavigator(
  {
    Blog: BlogScreen,
    WebView: WebViewScreen,
  },
  {
    initialRouteName: 'Blog',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: greyDark,
      },
      headerTintColor: white,
      headerTintStyle: {
        fontWeight: 'bold'
      }
    },
  }
);

const WodToolsStack = createStackNavigator(
  {
    WodTools: WodToolsScreen,
    UnitConverter: UnitConverterScreen,
    PercentTable: PercentTableScreen,
  },
  {
    initialRouteName: 'WodTools',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: greyDark,
      },
      headerTintColor: white,
      headerTintStyle: {
        fontWeight: 'bold'
      }
    },
  }
);

// const EventsStack = createStackNavigator(
//   {
//     Events: EventsScreen,
//     WebView: WebViewScreen,
//   },
//   {
//     initialRouteName: 'Events',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: greyDark,
//       },
//       headerTintColor: white,
//       headerTintStyle: {
//         fontWeight: 'bold'
//       }
//     },
//   }
// );

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    ChangePassword: ChangePasswordScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: greyDark,
      },
      headerTintColor: white,
      headerTintStyle: {
        fontWeight: 'bold'
      }
    },
    initialRouteName: 'Profile',
  }
);

const TabNav = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Wod: { screen: WodStack },
    Blog: { screen: BlogStack },
    WodTools: { screen: WodToolsStack },
    // Events: { screen: EventsStack },
    Profile: { screen: ProfileStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // stuff here
    }),
    initialRouteName: 'Home', //////////// FIX THIS
    lazy: false, //////// IS THIS GOING TO CAUSE PERFORMANCE ISSUES ?????
    tabBarOptions: {
      activeTintColor: white,
      inactiveTintColor: greyMedium,
      activeBackgroundColor: greyMediumDark,
      // activeBackgroundColor: blackBG,
      inactiveBackgroundColor: greyDarkExtra,
      style: {
        height: tabHeight,
        marginTop: 0,
      },
      tabStyle: {
        // paddingBottom: 35
      },
      labelStyle: {
        paddingBottom: 31,
        fontSize: 15
      },
      safeAreaInset: {
        bottom: 'never'
      },
    },
  },
);

// const MainDrawer = createDrawerNavigator(
//   {
//     Home: TabNav,
//     Profile: ProfileStack,
//     // Schedule: Schedule, // MAKE THESE COMPONENTS
//     // ContactUs: ContactUs, // MAKE THESE COMPONENTS
//   },
//   {
//     contentComponent: CustomDrawer,
//     drawerPosition: 'right',
//     // drawerBackgroundColor: '#411',
//     drawerBackgroundColor: greyDark,
//     contentOptions: {
//       activeTintColor: 'yellow',
//       inactiveTintColor: greyLightDark,
//       // activeBackgroundColor: '#622',
//       activeBackgroundColor: greyMediumDark,
//       // inactiveBackgroundColor: '#311',
//       inactiveBackgroundColor: blackBG,
//     }
//   }
// );

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppSwitch = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Auth: AuthStack,
    // Main: MainDrawer
    Main: TabNav,
  },
  {
    initialRouteName: 'Loading'
  }
)

export default AppContainer = createAppContainer(AppSwitch);

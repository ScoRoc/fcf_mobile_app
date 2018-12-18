import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';


import MainScreen from '../screens/MainScreen';
import IAPScreen from '../screens/IAPScreen';

import HomeScreen from '../screens/home/HomeScreen';
import BlogScreen from '../screens/blog/BlogScreen';
import WodScreen from '../screens/wod/WodScreen';
import WodToolsScreen from '../screens/wod-tools/WodToolsScreen';
import UnitConverterScreen from '../screens/wod-tools/unit-converter/UnitConverterScreen';
import PercentTableScreen from '../screens/wod-tools/percent-table/PercentTableScreen';

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
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTintStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const TabNav = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Blog: { screen: BlogScreen },
    WOD: { screen: WodScreen },
    WodTools: { screen: WodToolsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // stuff here
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'grey',
      activeBackgroundColor: '#4fd',
      inactiveBackgroundColor: '#053',
      style: {
        height: 80,
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

const MainDrawer = createDrawerNavigator(
  {
    Tabs: TabNav,
    IPP: IAPScreen,
  },
  {
    // drawerWidth: 250,
    drawerPosition: 'right',
    drawerBackgroundColor: '#411',
    contentOptions: {
      activeTintColor: 'yellow',
      inactiveTintColor: '#aaa',
      activeBackgroundColor: '#622',
      inactiveBackgroundColor: '#311'
    }
  }
);

// const RootStack = createStackNavigator(
//   {
//     Main: MainScreen,
//     IAP: IAPScreen
//   },
//   {
//     initialRouteName: 'Main',
//     mode: 'modal',
//     headerMode: 'none'
//   }
// );

export default AppContainer = createAppContainer(MainDrawer);

// Libraries
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import Blog from 'screens/Blog';
import ChangePasswordScreen from '../screens-OLD/profile/ChangePasswordScreen';
import Home from 'screens/Home';
import PercentTableScreen from '../screens-OLD/wod-tools/percent-table/PercentTableScreen';
import ProfileScreen from '../screens-OLD/profile/ProfileScreen';
import UnitConverterScreen from '../screens-OLD/wod-tools/unit-converter/UnitConverterScreen';
import Webview from 'screens/Webview';
// import WebViewScreen from '../screens-OLD/webview/WebViewScreen';
import Wods from 'screens/Wods';
// import WodScreen_OLD from '../screens-OLD/wod/WodScreen_OLD';
import WodToolsScreen from '../screens-OLD/wod-tools/WodToolsScreen';
// Constants
import { FULL_URLS, NAV } from 'utils/constants';

// Style Sheet
import { greyDarkExtra, greyMedium, greyMediumDark, tabHeight, white } from '../style-sheet';
// const tabHeight = 80;

// WodTools Navigator

const WodToolsStack = createStackNavigator();

const WodToolsNavigator = () => (
  <WodToolsStack.Navigator headerMode='none' initialRouteName={NAV.WOD_TOOLS}>
    <WodToolsStack.Screen component={WodToolsScreen} name={NAV.WOD_TOOLS} />
    <WodToolsStack.Screen component={UnitConverterScreen} name={NAV.UNIT_CONVERTER} />
    <WodToolsStack.Screen component={PercentTableScreen} name={NAV.PERCENT_TABLE} />
  </WodToolsStack.Navigator>
);

// Profile Navigation

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => (
  <ProfileStack.Navigator initialRouteName={NAV.PROFILE}>
    <ProfileStack.Screen
      component={ProfileScreen}
      name={NAV.PROFILE}
      options={{ headerShown: false }}
    />
    <ProfileStack.Screen component={ChangePasswordScreen} name={NAV.CHANGE_PASSWORD} />
  </ProfileStack.Navigator>
);

// Main Tabs Navigation

const MainTabs = createBottomTabNavigator();

const MainTabsNavigator = () => (
  <MainTabs.Navigator
    initialRouteName={NAV.HOME}
    screenOptions={({ route }) => ({
      // tabBarIcon: ({ color, focused, size }) => {
      //   // code to change tab icon
      // }
    })}
    tabBarOptions={{
      activeBackgroundColor: greyMediumDark,
      activeTintColor: white,
      inactiveBackgroundColor: greyDarkExtra,
      inactiveTintColor: greyMedium,
      labelStyle: {
        paddingBottom: tabHeight / 2.5,
        fontSize: 15,
      },
      safeAreaInsets: {
        bottom: 0,
      },
      style: {
        height: tabHeight,
        marginTop: 0,
      },
    }}
  >
    <MainTabs.Screen component={Home} name={NAV.HOME} />
    <MainTabs.Screen component={Wods} name={NAV.WODS} />
    {/* <MainTabs.Screen component={WodScreen_OLD} name={NAV.WODS} /> */}
    <MainTabs.Screen component={Blog} name={NAV.BLOG} />
    <MainTabs.Screen component={WodToolsNavigator} name={NAV.WOD_TOOLS} />
    <MainTabs.Screen component={ProfileNavigator} name={NAV.PROFILE} />
  </MainTabs.Navigator>
);

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator initialRouteName={NAV.MAIN_TABS}>
      <MainStack.Screen
        component={MainTabsNavigator}
        name={NAV.MAIN_TABS}
        options={{ headerShown: false }}
      />
      <MainStack.Screen component={Webview} name={NAV.WEB_VIEW} />
    </MainStack.Navigator>
  );
}

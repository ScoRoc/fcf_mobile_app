// Libraries
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import BlogScreen from '../screens-OLD/blog/BlogScreen';
import ChangePasswordScreen from '../screens-OLD/profile/ChangePasswordScreen';
import Home from '../screens/Home';
// import HomeScreen_NEW from '../screens-OLD/home/HomeScreen_NEW';
import PercentTableScreen from '../screens-OLD/wod-tools/percent-table/PercentTableScreen';
import ProfileScreen from '../screens-OLD/profile/ProfileScreen';
import UnitConverterScreen from '../screens-OLD/wod-tools/unit-converter/UnitConverterScreen';
import WebViewScreen from '../screens-OLD/webview/WebViewScreen';
import WodScreen from '../screens-OLD/wod/WodScreen';
import WodToolsScreen from '../screens-OLD/wod-tools/WodToolsScreen';

// Style Sheet
import { greyDarkExtra, greyMedium, greyMediumDark, tabHeight, white } from '../style-sheet';

// Home Navigation

const HomeStack = createStackNavigator();

const HomeNavigator = () => (
  <HomeStack.Navigator initialRouteName="Home">
    {/* <HomeStack.Screen component={HomeScreen_NEW} name="Home" options={{ headerShown: false }} /> */}
    <HomeStack.Screen component={Home} name="Home" options={{ headerShown: false }} />
    <HomeStack.Screen component={WebViewScreen} name="WebView" />
  </HomeStack.Navigator>
);

// Wod Navigation

const WodStack = createStackNavigator();

const WodNavigator = () => (
  <WodStack.Navigator initialRouteName="Wod">
    <WodStack.Screen component={WodScreen} name="Wod" options={{ headerShown: false }} />
    <WodStack.Screen component={WebViewScreen} name="WebView" />
  </WodStack.Navigator>
);

// Blog Navigation

const BlogStack = createStackNavigator();

const BlogNavigator = () => (
  <BlogStack.Navigator initialRouteName="Blog">
    <BlogStack.Screen component={BlogScreen} name="Blog" options={{ headerShown: false }} />
    <BlogStack.Screen component={WebViewScreen} name="WebView" />
  </BlogStack.Navigator>
);

// WodTools Navigator

const WodToolsStack = createStackNavigator();

const WodToolsNavigator = () => (
  <WodToolsStack.Navigator headerMode="none" initialRouteName="WodTools">
    <WodToolsStack.Screen component={WodToolsScreen} name="WodTools" />
    <WodToolsStack.Screen component={UnitConverterScreen} name="UnitConverter" />
    <WodToolsStack.Screen component={PercentTableScreen} name="PercentTable" />
  </WodToolsStack.Navigator>
);

// Profile Navigation

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => (
  <ProfileStack.Navigator initialRouteName="Profile">
    <ProfileStack.Screen
      component={ProfileScreen}
      name="Profile"
      options={{ headerShown: false }}
    />
    <ProfileStack.Screen component={ChangePasswordScreen} name="ChangePassword" />
  </ProfileStack.Navigator>
);

// Main Tabs Navigation

const MainTabs = createBottomTabNavigator();

export default function MainTabsNavigator() {
  return (
    <MainTabs.Navigator
      initialRouteName="Home"
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
      <MainTabs.Screen component={HomeNavigator} name="Home" />
      <MainTabs.Screen component={WodNavigator} name="Wod" />
      <MainTabs.Screen component={BlogNavigator} name="Blog" />
      <MainTabs.Screen component={WodToolsNavigator} name="WodTools" />
      <MainTabs.Screen component={ProfileNavigator} name="Profile" />
    </MainTabs.Navigator>
  );
}

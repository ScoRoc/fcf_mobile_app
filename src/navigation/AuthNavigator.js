// Libraries
import React, { useGlobal } from 'reactn';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import LoginScreen from '../screens-OLD/auth/LoginScreen';
import SignupScreen from '../screens-OLD/auth/SignupScreen';
// Constants
import { NAV } from 'utils/constants';
// Helpers
import { isLoggedIn } from 'utils/functions';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  // Global State
  const [loginStatus] = useGlobal('loginStatus');

  // Return
  return (
    <Stack.Navigator initialRouteName={NAV.LOGIN}>
      <Stack.Screen
        component={LoginScreen}
        name={NAV.LOGIN}
        options={{
          animationTypeForReplace: isLoggedIn(loginStatus) ? 'pop' : 'push',
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={SignupScreen}
        name={NAV.SIGNUP}
        options={{
          animationTypeForReplace: isLoggedIn(loginStatus) ? 'pop' : 'push',
          headerShown: false,
          title: NAV.SIGNUP,
        }}
      />
    </Stack.Navigator>
  );
}

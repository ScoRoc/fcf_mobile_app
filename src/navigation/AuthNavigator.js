// Libraries
import React, { useGlobal } from 'reactn';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import LoginScreen from '../screens-OLD/auth/LoginScreen';
import SignupScreen from '../screens-OLD/auth/SignupScreen';
// Constants
import { NAV } from 'utils/constants';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  // Global State
  const [isLoggingOut] = useGlobal('isLoggingOut');

  // Return
  return (
    <Stack.Navigator initialRouteName={NAV.LOGIN}>
      <Stack.Screen
        component={LoginScreen}
        name={NAV.LOGIN}
        options={{ animationTypeForReplace: isLoggingOut ? 'pop' : 'push' }}
      />
      <Stack.Screen
        component={SignupScreen}
        name={NAV.SIGNUP}
        options={{
          animationTypeForReplace: isLoggingOut ? 'pop' : 'push',
          title: NAV.SIGNUP,
        }}
      />
    </Stack.Navigator>
  );
}

// Libraries
import React, { useGlobal } from 'reactn';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  // Global State
  const [isLoggingOut] = useGlobal('isLoggingOut');

  // Return
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        component={LoginScreen}
        name='Login'
        options={{ animationTypeForReplace: isLoggingOut ? 'pop' : 'push' }}
      />
      <Stack.Screen
        component={SignupScreen}
        name='Signup'
        options={{
          animationTypeForReplace: isLoggingOut ? 'pop' : 'push',
          title: 'Signup',
        }}
      />
    </Stack.Navigator>
  );
};

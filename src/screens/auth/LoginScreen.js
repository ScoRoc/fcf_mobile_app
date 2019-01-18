import React from 'react';
import { Button, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const LoginScreen = props => {
  return (
    <View>
      <Text>login screen</Text>
      <Button
        onPress={() => props.navigation.navigate('Signup')}
        title='go to signup'
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  text: {
    // fontSize: '22rem'
  },
});

export default LoginScreen;

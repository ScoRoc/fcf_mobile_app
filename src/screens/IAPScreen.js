import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default TestScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>IAP modal screen</Text>
      <Button title='back to home' onPress={() => props.navigation.goBack()} />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3fa'
  }
});

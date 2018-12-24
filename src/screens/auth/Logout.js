import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default Logout = props => {
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <Text>logout needs to be finished...</Text>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  inner: {
    height: '30%',
    backgroundColor: 'blue',
  },
});

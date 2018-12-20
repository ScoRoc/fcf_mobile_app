import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default ArrowIO = props => {
  const { lb, kg } = props;
  return (
    <View>
      <Text>arrow IO</Text>
      <View>
        <Text>lb output value: </Text>
        <Text>{lb}</Text>
      </View>
      <View>
        <Text>kg output value: </Text>
        <Text>{kg}</Text>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  view: {
    backgroundColor: 'darkseagreen',
  },
})

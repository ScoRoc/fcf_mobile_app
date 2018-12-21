import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default WodCard = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{`work up to a heavy snatch,
then

"Amanda"
9-7-5 reps for time:
ring muscle-ups
(squat) snatches, 61/43kg

Post time to whiteboard`}
      </Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  $padding: '7%',
  view: {
    flex: 1,
    padding: '$padding',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'skyblue',
    borderRadius: '25rem',
  },
  text: {
    fontSize: '17rem'
  },
});

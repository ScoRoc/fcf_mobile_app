import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';

export default WodCard = props => {
  const { wod } = props;
  const day = moment(wod.date).format('dddd');
  const date = `${ moment(wod.date).format('MM') }/${ moment(wod.date).format('D') }`;
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.titleView}>
        <Text style={styles.title}>{day}</Text>
        <Text style={styles.title}>{date}</Text>
      </View>
      <View style={styles.textWrapper}>
        {/* <Text style={styles.text}>{`work up to a heavy snatch,
then

"Amanda"
9-7-5 reps for time:
ring muscle-ups
(squat) snatches, 61/43kg

(squat) snatches, 61/43kg
(squat) snatches, 61/43kg
(squat) snatches, 61/43kg
(squat) snatches, 61/43kg
(squat) snatches, 61/43kg
(squat) snatches, 61/43kg

Post time to whiteboard`}
        </Text> */}
        <Text style={styles.text}>{wod.text}</Text>
      </View>
      <View style={styles.likesWrapper}>
        <Text style={styles.text}>Like btn</Text>
        <Text style={styles.text}>Muslce btn</Text>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  $padding: '7%',
  $borderRadius: '25rem',
  cardWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '$greyDark',
    borderRadius: '$borderRadius',
  },
  titleView: {
    height: '12%',
    width: '100%',
    padding: '5rem',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '$greyMedium',
    borderTopLeftRadius: '$borderRadius',
    borderTopRightRadius: '$borderRadius',
  },
  title: {
    color: '$white',
    fontSize: '30rem'
  },
  textWrapper: {
    padding: '$padding',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '$white',
    fontSize: '17rem'
  },
  likesWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '$greyMedium',
  },
});

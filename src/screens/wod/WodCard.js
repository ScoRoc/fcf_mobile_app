import React from 'reactn';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';

import LikeButton from '../../components/LikeButton';

import useAxios from '../../utils/axios-helpers';
import { urlHostName } from '../../utils/global-variables';

const path = `${urlHostName}/wod/like`;
const { putWithAxios } = useAxios(path);

class WodCard extends React.Component {

  handleSuccess = async ({ wodId, userId, type }) => {
    this.props.updateWod({ wodId, userId, type });
  }

  handleErr = err => {
    console.log('signup failed with err: ', err);
  }

  updateLike = ({ wodId, userId, type }) => {
    putWithAxios({ wodId, userId, type }).then(result => {
      // console.log('result.data: ', result.data);
      result.data.updatedWod
        ? this.handleSuccess({ wodId, userId, type })
        : this.handleErr(result.data.err);
    }).catch(err => console.log('err: ', err));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.updated !== this.props.updated && this.props.updated === true) {
      this.props.finishUpdate();
    }
  }

  render() {
    const { wod } = this.props;
    const { attended, likes } = wod;
    const userId = this.global.user ? this.global.user._id : '';
    const liked = likes.includes(userId);
    const attendedChecked = attended.includes(userId);
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
          {/* <Text style={styles.text}>Like btn</Text> */}
          <LikeButton
            // addedStyle={{ borderRightWidth: 1, width: '50%' }}
            addedStyle={{ width: '50%' }}
            library={{ liked: 'MaterialCommunityIcons', unliked: 'MaterialCommunityIcons' }}
            liked={liked}
            likes={likes.length}
            name={{ liked: 'heart', unliked: 'heart-outline' }}
            updateLike={() => this.updateLike({ wodId: wod._id, userId, type: 'likes' })}
          />
          <LikeButton
            addedStyle={{ width: '50%' }}
            library={{ liked: 'MaterialCommunityIcons', unliked: 'MaterialCommunityIcons' }}
            liked={attendedChecked}
            likes={attended.length}
            name={{ liked: 'weight-kilogram', unliked: 'weight' }}
            updateLike={() => this.updateLike({ wodId: wod._id, userId, type: 'attended' })}
          />
          {/* <Text style={styles.text}>Muslce btn</Text> */}
        </View>
      </View>
    );
  }
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

export default WodCard;

// Libraries
import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import moment from 'moment';
// Components
import LikeButton from '../../components/LikeButton';
import Touchable from '../../components/Touchable';
// Helper Funcs
import useAxios from '../../utils/axios-helpers';
import { urlHostName } from '../../utils/global-variables';
// String Constants
import {
  _EMPTYSTRING, _SLASH,
  EVENTS, HEART, HEART_OUTLINE, LIKE, MATERIAL_COMMUNITY_ICONS, MMM, OPACITY
} from '../../utils/stringConstants';

const path = `${urlHostName}${_SLASH}${EVENTS}${_SLASH}${LIKE}`;
const { putWithAxios } = useAxios(path);

class DateBox extends React.Component {
  constructor(props) {
    super(props);
    this.lastPress = null;
  }

  updateLikeInfo = () => {
    const likes = this.state.likes === 0 ? 1 : 0;
    this.setState({liked: !this.state.liked, likes})
  }

  handleSuccess = async ({ eventId, userId }) => {
    this.props.updateEvent({ eventId, userId });
  }

  handleErr = err => {
    console.log('signup failed with err: ', err);
  }

  updateLike = ({ eventId, userId }) => {
    putWithAxios({ eventId, userId }).then(result => {
      // console.log('result.data: ', result.data);
      result.data.updatedEvent
        ? this.handleSuccess({ eventId, userId })
        : this.handleErr(result.data.err);
    }).catch(err => console.log('err: ', err));
  }

  // iksent from GitHub
  handleDoublePress = date => {
    const time = new Date().getTime();
    const delta = time - this.lastPress;
    const DOUBLE_PRESS_DELAY = 400;
    if (delta < DOUBLE_PRESS_DELAY) {
      this.updateLike({
        eventId: this.props.event._id,
        userId: this.props.user._id,
      });
    }
    this.lastPress = time;
  };

  componentDidUpdate(prevProps) {
    if (prevProps.updated !== this.props.updated && this.props.updated === true) {
      this.props.finishUpdate();
    }
  }

  render() {
    const { event, user } = this.props;
    const { likes } = event;
    const userId = user ? user._id : EventLegend;
    const liked = likes.includes(userId);
    const startDate = moment(event.startDate);
    const date = startDate.date();
    const month = moment(startDate).format(MMM);
    return (
      <View style={ [styles.dateTile, { backgroundColor: this.props.color }] }>
        <Touchable
          iosType={OPACITY}
          onPress={this.handleDoublePress}
          viewStyle={styles.viewStyle}
        >
          <Text style={styles.monthText}>{month}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </Touchable>
        <LikeButton
          library={{ liked: MATERIAL_COMMUNITY_ICONS, unliked: MATERIAL_COMMUNITY_ICONS }}
          liked={liked}
          likes={likes.length}
          name={{ liked: HEART, unliked: HEART_OUTLINE }}
          updateLike={() => this.updateLike({ eventId: event._id, userId })}
        />
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  $dateBoxWidth: '$width / 5',
  dateTile: {
    width: '$dateBoxWidth',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewStyle: {
    width: '$dateBoxWidth',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  monthText: {
    color: 'white',
    fontSize: '12rem',
  },
  dateText: {
    color: 'white',
    fontSize: '43rem',
  },
});

const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(DateBox);

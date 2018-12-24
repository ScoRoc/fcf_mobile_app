import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import HeartButton from '../../../components/HeartButton';
import Touchable from '../../../components/Touchable';

export default class DateBox extends React.Component {
  constructor(props) {
    super(props);
    this.lastPress = null;
    this.state = {
      liked: false,
      likes: 0,
    };
  }

  updateLikeInfo = () => {
    const likes = this.state.likes === 0 ? 1 : 0;
    this.setState({liked: !this.state.liked, likes})
  }

  handleDoublePress = date => {
    const time = new Date().getTime();
    const delta = time - this.lastPress;
    const DOUBLE_PRESS_DELAY = 400;
    if (delta < DOUBLE_PRESS_DELAY) {
      const numLikes = this.state.likes === 0 ? 1 : 0;
      this.setState({liked: !this.state.liked, likes: numLikes})
    }
    this.lastPress = time;
  };

  render() {
    const { liked, likes } = this.state;
    const { color, date, month } = this.props;
    return (
      <View style={[styles.dateTile, {backgroundColor: color}]}>
        {/* DOUBLE CLICK ON NUMBER TO HYPERLINK TO WEB */}
        <Touchable
          iosType='opacity'
          onPress={this.handleDoublePress}
          viewStyle={styles.viewStyle}
        >
          <Text style={styles.monthText}>{month}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </Touchable>
        <HeartButton liked={liked} likes={likes} updateLikeInfo={this.updateLikeInfo} />
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

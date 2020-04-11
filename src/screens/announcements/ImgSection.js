// Libraries
import React from 'reactn';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// Components
import LikeButton from '../../components/LikeButton';
import Touchable from '../../components/Touchable';
// Helper Funcs
import useAxios from '../../utils/axios-helpers';
import { urlHostName } from '../../utils/global-variables';
// String Constants
import {
  _EMPTYSTRING, _SLASH, ANNOUNCEMENTS, LIKE, OPACITY,
} from '../../utils/stringConstants';

const path = `${urlHostName}${_SLASH}${ANNOUNCEMENTS}${_SLASH}${LIKE}`;
const { putWithAxios } = useAxios(path);

class ImgSection extends React.Component {
  constructor(props) {
    super(props);
    this.lastPress = null;
  }

  handleSuccess = async ({ announcementId, userId }) => {
    this.props.updateAnnouncement({ announcementId, userId });
  }

  handleErr = err => {
    console.log('signup failed with err: ', err);
  }

  updateLike = ({ announcementId, userId }) => {
    putWithAxios({ announcementId, userId }).then(result => {
      // console.log('result.data: ', result.data);
      result.data.updatedAnnouncement
        ? this.handleSuccess({ announcementId, userId })
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
        announcementId: this.props.announcement._id,
        userId: this.global.user._id,
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
    const { announcement, imgHeight, imgWidth } = this.props;
    const userId = this.global.user ? this.global.user._id : _EMPTYSTRING;
    const { _id, imgUrl, likes } = announcement;
    const liked = likes.includes(userId);
    return (
      <View style={styles.imgWrap}>
        <Touchable
          activeOpacity={.5}
          iosType={OPACITY}
          onPress={this.handleDoublePress}
          style={{height: imgHeight, width: imgWidth}}
        >
          <Image style={{height: imgHeight, width: imgWidth}} source={{uri: imgUrl}} />
        </Touchable>
        {/* <LikeButton
          addedStyle={{ width: imgWidth }}
          library={{ liked: 'MaterialCommunityIcons', unliked: 'MaterialCommunityIcons' }}
          liked={liked}
          likes={likes.length}
          name={{ liked: 'heart', unliked: 'heart-outline' }}
          updateLike={() => this.updateLike({ announcementId: _id, userId })}
        /> */}
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  $spacing: '10rem',
  imgWrap: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'purple',
  },
});

export default ImgSection;

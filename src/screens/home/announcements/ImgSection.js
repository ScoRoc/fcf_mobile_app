import React from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import HeartButton from '../../../components/HeartButton';
import Touchable from '../../../components/Touchable';

// export default ImgSection = props => {
//   const { img, imgHeight, imgWidth } = props;
//   return (
//     <View style={styles.imgWrap}>
//       <View style={{height: imgHeight, width: imgWidth}}>
//         <Image style={{height: imgHeight, width: imgWidth}} source={{uri: img}} />
//       </View>
//       <HeartButton />
//     </View>
//   );
// };

export default class ImgSection extends React.Component {
  constructor(props) {
    super(props);
    this.lastPress = null;
    this.state = {
      liked: false,
      likes: 0,
    }
  }

  updateLikeInfo = () => {
    const likes = this.state.likes === 0 ? 1 : 0;
    this.setState({liked: !this.state.liked, likes})
  }

  // iksent from GitHub
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
    const { img, imgHeight, imgWidth } = this.props;
    return (
      <View style={styles.imgWrap}>
        <Touchable
          activeOpacity={.5}
          iosType='opacity'
          onPress={this.handleDoublePress}
          style={{height: imgHeight, width: imgWidth}}
        >
          <Image style={{height: imgHeight, width: imgWidth}} source={{uri: img}} />
        </Touchable>
        <HeartButton liked={this.state.liked} likes={this.state.likes} updateLikeInfo={this.updateLikeInfo} />
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

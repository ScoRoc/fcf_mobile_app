import React from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import HeartButton from '../../../components/HeartButton';

export default ImgSection = props => {
  const { img, imgHeight, imgWidth } = props;
  return (
    <View style={styles.imgWrap}>
      <View style={{height: imgHeight, width: imgWidth}}>
        <Image style={{height: imgHeight, width: imgWidth}} source={{uri: img}} />
      </View>
      <HeartButton />
    </View>
  );
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

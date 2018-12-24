import React from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default ImgSection = props => {
  const { img, imgHeight, imgWidth } = props;
  return (
    <View style={styles.imgWrap}>
      <View style={{height: imgHeight, width: imgWidth}}>
        <Image style={{height: imgHeight, width: imgWidth}} source={{uri: img}} />
      </View>
      <Text>foo</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  $spacing: '10rem',
  imgWrap: {
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
});

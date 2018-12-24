import React from 'react';
import { Image, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../../components/Touchable';

const RightImgAnnouncement = props => {
  const { img, imgHeight, imgWidth, textPadding, text, textWrapWidth } = props;
  return (
    <>
      <Touchable
        iosType='highlight'
        onPress={() => props.navigation.navigate('WebView')}
        style={[styles.textWrap, {width: textWrapWidth}, textPadding]}
        underlayColor='purple'
      >
          <Text style={styles.text}>{text}</Text>
      </Touchable>
      <View style={{height: imgHeight, width: imgWidth}}>
        <Image style={{height: imgHeight, width: imgWidth}} source={{uri: img}} />
      </View>
    </>
  );
};

const styles = EStyleSheet.create({
  $spacing: '10rem',
  textWrap: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    color: '$white',
    fontSize: '16rem',
  },
});

export default withNavigation(RightImgAnnouncement);

import React from 'react';
import { Image, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

const LeftImgAnnouncement = props => {
  const { img, imgHeight, imgWidth, textPadding, text, textWrapWidth } = props;
  return (
    <>
      <View style={{height: imgHeight, width: imgWidth}}>
        <Image style={{height: imgHeight, width: imgWidth}} source={{uri: img}} />
      </View>
      <Touchable
        iosType='highlight'
        onPress={() => props.navigation.navigate('WebView')}
        style={[styles.textWrap, {width: textWrapWidth}, textPadding]}
        underlayColor='purple'
      >
        <Text style={styles.text}>{text}</Text>
      </Touchable>
    </>
  )
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

export default withNavigation(LeftImgAnnouncement);

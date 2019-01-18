import React from 'react';
import { Image, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../../components/Touchable';
import ImgSection from './ImgSection';

const LeftImgAnnouncement = props => {
  const { announcement, imgHeight, imgWidth, textPadding, textWrapWidth } = props;
  const { announcementText, imgUrl, likes, url } = announcement;
  return (
    <>
      <ImgSection
        img={imgUrl}
        imgHeight={imgHeight}
        imgWidth={imgWidth}
        likes={likes.length}
        updateAnnouncement={props.updateAnnouncement}
      />
      <Touchable
        activeOpacity={.8}
        iosType='highlight'
        onPress={() => props.navigation.navigate('WebView', { url })}
        viewStyle={[textPadding, styles.textWrap, {width: textWrapWidth}]}
        underlayColor={styles.$underlay}
      >
        <Text style={styles.text}>{announcementText}</Text>
      </Touchable>
    </>
  )
};

const styles = EStyleSheet.create({
  $underlay: '$yellow',
  textWrap: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '$greyDark',
  },
  text: {
    color: '$white',
    fontSize: '16rem',
  },
  imgWrap: {
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default withNavigation(LeftImgAnnouncement);

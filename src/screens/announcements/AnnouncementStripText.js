// Libraries
import React from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// Components
import Touchable from '../../components/Touchable';
import ImgSection from './ImgSection';
// String Constants
import { HIGHLIGHT, WEB_VIEW } from '../../utils/stringConstants';

const AnnouncementStripText = props => {
  const { announcement, imgWidth, textWrapWidth } = props;
  const { announcementText, url } = announcement;
  return (
    <Touchable
      activeOpacity={.8}
      iosType={HIGHLIGHT}
      onPress={() => props.navigation.navigate(WEB_VIEW, { url })}
      viewStyle={{ width: imgWidth }}
      underlayColor={styles.$underlay}
    >
      <Text style={styles.text}>{announcementText}</Text>
    </Touchable>
  )
};

const styles = EStyleSheet.create({
  $underlay: '$yellow',
  text: {
    width: '100%',
    marginTop: '20rem',
    color: '$white',
    fontSize: '16rem',
  }
});

export default AnnouncementStripText;

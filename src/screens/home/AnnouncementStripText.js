import React from 'react';
import { Image, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable';
import ImgSection from './ImgSection';

const AnnouncementStripText = props => {
  const { announcement, imgWidth, textWrapWidth } = props;
  const { announcementText, url } = announcement;
  return (
    <Touchable
      activeOpacity={.8}
      iosType='highlight'
      onPress={() => props.navigation.navigate('WebView', { url })}
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

export default withNavigation(AnnouncementStripText);

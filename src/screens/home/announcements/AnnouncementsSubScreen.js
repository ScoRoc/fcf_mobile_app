import React from 'react';
import { Button, Image, ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import AnnouncementStrip from './AnnouncementStrip';

import { height, width } from '../../../variables/variables';

//////////////////////////////
const imgHeight = height / 8.5;
const imgWidth = width * .4;
const leftoverSpace = width - imgWidth;
const paddedSpace = leftoverSpace * .9;
const padding = leftoverSpace * .1 / 2;

const fakeAnnouncements = () => {
  const fakeAnnouncementsObj = {
    one: {
      text: 'Drinks at Optimism',
      image: `https://www.placecage.com/c/${imgWidth}/${imgHeight}`,
    },
    two: {
      text: 'Cancer Drive',
      image: `https://www.placecage.com/c/${imgWidth}/${imgHeight}`,
    },
    three: {
      text: '5k Run for ABC',
      image: `https://www.placecage.com/c/${imgWidth}/${imgHeight}`,
    },
    four: {
      text: 'Another Comp Event',
      image: `https://www.placecage.com/c/${imgWidth}/${imgHeight}`,
    },
    five: {
      text: 'Another Social Event',
      image: `https://www.placecage.com/c/${imgWidth}/${imgHeight}`,
    },
    six: {
      text: 'Another Community Event word words words words words words',
      image: `https://www.placecage.com/c/${imgWidth}/${imgHeight}`,
    },
  };
  return {
    getAllAnnouncements: (() => fakeAnnouncementsObj)(),
  }
};
const { getAllAnnouncements } = fakeAnnouncements();
//////////////////////////////

export default AnnouncementsSubScreen = props => {
  const announcements = Object.keys(getAllAnnouncements).map((announcement, i) => {
    const imgLeft = i % 2 === 0 ? true : false;
    return (
      <AnnouncementStrip
        img={getAllAnnouncements[announcement].image}
        text={getAllAnnouncements[announcement].text}
        imgHeight={imgHeight}
        imgLeft={imgLeft}
        imgWidth={imgWidth}
        padding={padding}
        textWrapWidth={leftoverSpace}
        key={i}
      />
    );
  });
  return (
    <View style={[styles.screen, {width}]}>
      <ScrollView>
        {announcements}
      </ScrollView>
    </View>
  )
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  text: {
    color: '$pink',
    fontSize: '22rem'
  },
});

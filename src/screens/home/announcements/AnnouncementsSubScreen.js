import React from 'react';
import { Button, Dimensions, Image, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

//////////////////////////////
const { height, width } = Dimensions.get('window');
const ih = height / 10;
const iw = width * .4;

const fakeAnnouncements = () => {
  const fakeAnnouncementsObj = {
    one: {
      text: 'Drinks at Optimism',
      image: `https://www.placecage.com/c/${iw}/${ih}`,
    },
    two: {
      text: 'Cancer Drive',
      image: `https://www.placecage.com/c/${iw}/${ih}`,
    },
    three: {
      text: '5k Run for ABC',
      image: `https://www.placecage.com/c/${iw}/${ih}`,
    },
    four: {
      text: 'Another Comp Event',
      image: `https://www.placecage.com/c/${iw}/${ih}`,
    },
    five: {
      text: 'Another Social Event',
      image: `https://www.placecage.com/c/${iw}/${ih}`,
    },
    six: {
      text: 'Another Community Event',
      image: `https://www.placecage.com/c/${iw}/${ih}`,
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
    const position  = i % 2 === 0
                    ? (
                      <View style={{flexDirection: 'row'}}>
                        <Image style={{height: ih, width: iw, marginLeft: 10}} source={{uri: getAllAnnouncements[announcement].image}} />
                        <Text style={{alignSelf: 'center', marginLeft: 10}}>{getAllAnnouncements[announcement].text}</Text>
                      </View>
                      )
                    : (
                      <View style={{flexDirection: 'row', height: ih}}>
                        <Text style={{alignSelf: 'center'}}>{getAllAnnouncements[announcement].text}</Text>
                        <Image
                          style={{height: ih, width: iw, marginLeft: 10, position: 'absolute', right: 10}}
                          source={{uri: getAllAnnouncements[announcement].image}}
                        />
                      </View>
                      )
    return (
      <View
        style={{
          // flexDirection: 'row',
          marginTop: 10,
          marginBottom: 10,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: 'grey',
        }}
        key={i}
      >
        {/* <Image style={{height: ih, width: iw}} source={{uri: getAllAnnouncements[announcement].image}} />
        <Text style={{alignSelf: 'center', marginLeft: 10}}>{getAllAnnouncements[announcement].text}</Text> */}
        {position}
      </View>
    );
  });
  return (
    <View style={[styles.screen, {width}]}>
      <Text>Announcements sub screen</Text>
      <ScrollView>
        {announcements}
      </ScrollView>
    </View>
  )
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  screen: {
    // paddingTop: '$padding',
    // flex: 1,
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  text: {
    color: '$pink',
    fontSize: '22rem'
  }
});

import React from 'react';
import { Button, ImageBackground, StatusBar, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

import WodSubScreen from './WodSubScreen';

import { blackBG, blueGradDark } from '../../variables/variables';

const uri = 'https://www.placecage.com/c/375/100';

export default WodScreen = props => {
  return (
    <LinearGradient
      colors={[blackBG, blueGradDark, blackBG]}
      start={[0.5, .25]}
      end={[0.5, .9]}
      locations={[0.01, .01, 1.1]}
      style={styles.screen}
    >
      <StatusBar barStyle='light-content' />
      <ImageBackground source={{uri}} style={styles.imgBg}>
        <View style={styles.imgView}>
          <Text style={styles.titleText}>WOD</Text>
        </View>
      </ImageBackground>
      <View style={styles.dateBanner}>
        <Text style={styles.dateBannerText}>Week of Dec 17th</Text>
      </View>
      <WodSubScreen />
    </LinearGradient>
  )
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  screen: {
    paddingTop: '$padding',
    flex: 1,
    // backgroundColor: '$blackBG',
  },
  imgBg: {
    height: '100rem',
    width: '$width',
  },
  imgView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  titleText: {
    color: 'white',
    fontSize: '70rem',
  },
  dateBanner: {
    padding: '7rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$greyDark',
  },
  dateBannerText: {
    color: '$white',
    fontSize: '25rem',
  },
});

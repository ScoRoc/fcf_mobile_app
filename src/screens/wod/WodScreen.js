import React from 'react';
import { Button, ImageBackground, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const uri = 'https://www.placecage.com/c/375/162';

export default WodScreen = props => {
  return (
    <View style={styles.screen}>
      <ImageBackground source={{uri}} style={styles.imgBg}>
        <View style={styles.imgView}>
          <Text style={styles.titleText}>WOD</Text>
        </View>
      </ImageBackground>
      <Text style={styles.text}>Hello from WodScreen</Text>
      <Button title='open drawer' onPress={() => props.navigation.openDrawer()} />
    </View>
  )
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  screen: {
    paddingTop: '$padding',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  imgBg: {
    height: '$height * .2',
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
    // fontWeight: 'bold',
  },
  text: {
    color: '$pink',
    fontSize: '22rem'
  }
});

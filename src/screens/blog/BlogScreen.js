import React from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable';

export default class BlogScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const uri = 'http://www.foundationcrossfit.com/blog/';
    return (
      <View style={styles.screen}>
        <StatusBar barStyle='light-content' />
        <Touchable onPress={() => this.props.navigation.navigate('WebView', {uri})} iosType='opacity'>
          <Text style={styles.text}>Visit the blog</Text>
        </Touchable>
        <Button title='open drawer' onPress={() => this.props.navigation.openDrawer()} />
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  screen: {
    paddingTop: '$padding',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$blackBG',
  },
  text: {
    color: '$yellow',
    fontSize: '22rem'
  }
});

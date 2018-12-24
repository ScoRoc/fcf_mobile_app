import React from 'react';
import { WebView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class WebViewScreen extends React.Component {
  static navigationOptions = {
    title: 'WebView',
    headerTitleStyle: {
      fontSize: 22,
      // fontWeight: 'bold',
    },
  }

  render() {
    const uriDefault = 'http://www.foundationcrossfit.com/';
    const uri = this.props.navigation.getParam('uri', uriDefault);
    return (
      // <View style={styles.view}>
        <WebView source={{uri}} style={styles.webView} />
      // </View>
    );
  }
};

const styles = EStyleSheet.create({
  // view: {
  //   flex: 1,
  //   paddingTop: 50,
  //   paddingBottom: 50,
  // },
  webView: {
    flex: 1
  },
});

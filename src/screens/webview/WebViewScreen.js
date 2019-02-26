import React from 'react';
import { WebView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class WebViewScreen extends React.Component {
  static navigationOptions = {
    title: 'Blog',
    headerTitleStyle: {
      fontSize: 22,
      // fontWeight: 'bold',
    },
  }

  render() {
    const defaultUrl = 'www.foundationcrossfit.com/';
    const partialUrl = this.props.navigation.getParam('url', defaultUrl);
    const url = `http://${partialUrl}`;
    return (
      // <View style={styles.view}>
        <WebView source={{ url }} style={styles.webView} />
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

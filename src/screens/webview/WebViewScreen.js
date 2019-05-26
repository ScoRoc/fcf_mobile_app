import React from 'react';
import { WebView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const defaultUrl = 'www.foundationcrossfit.com/';

export default class WebViewScreen extends React.Component {
  static navigationOptions = {
    title: 'Blog',
    headerTitleStyle: {
      fontSize: 22,
      // fontWeight: 'bold',
    },
  }

  doesUrlStartWithHttp = url => {
    const urlBeginning = url.slice(0, 8);
    const regEx = /^(http:\/\/)\w$|^(https:\/\/)$/i;
    console.log('urlBeginning: ', urlBeginning)
    console.log('regex test: ', regEx.test(urlBeginning))
    return regEx.test(urlBeginning);
  }

  getFullUrl = url => ( this.doesUrlStartWithHttpPattern(url) ? url : `http://${url}` )

  isValidUrl = defaultUrl => url => ( /^\S*\.\w*\.\S*$/i.test(url) ? url : defaultUrl )

  validUrlOrFcfHomePage = this.isValidUrl(defaultUrl)

  render() {
    const partialUrl = this.props.navigation.getParam('url', defaultUrl);
    const url = this.validUrlOrFcfHomePage(partialUrl);
    console.log( url )
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

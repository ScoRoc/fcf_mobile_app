// Libraries
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
// Atoms
import { Box, Text, TouchableIOSOpacity } from 'atoms';
// Constants
// import { FULL_URLS } from 'utils/constants';

// Webview

const Webview = ({ navigation, route }) => {
  // Refs

  const webviewRef = useRef(null);

  // Return

  return (
    <Box flex={1}>
      <StatusBar barStyle='dark-content' />
      <WebView
        // allowsBackForwardNavigationGestures
        // containerStyle={{ backgroundColor: 'green' }}
        ref={webviewRef}
        // renderLoading={} // function that returns a loading indicator, startInLoadingState must be true
        // source={{ uri: route?.params?.url || FULL_URLS.FCF_BLOG }}
        source={{ uri: route?.params?.url }}
        // startInLoadingState
        // style={{ flex: 0, height: 200 }}
      />
      <Box
        alignItems='center'
        backgroundColor='orange'
        flexDirection='row'
        height={80}
        justifyContent='space-around'
        paddingBottom={40}
        paddingTop={20}
        width='100%'
      >
        <TouchableIOSOpacity onPress={() => webviewRef.current.goBack()}>
          <Text>[back]</Text>
        </TouchableIOSOpacity>
        <TouchableIOSOpacity onPress={() => webviewRef.current.goForward()}>
          <Text>[forward]</Text>
        </TouchableIOSOpacity>
        <TouchableIOSOpacity onPress={() => webviewRef.current.reload()}>
          <Text>[refresh]</Text>
        </TouchableIOSOpacity>
      </Box>
    </Box>
  );
};

Webview.propTypes = {
  navigation: PropTypes.element, // react-navigation navigation object
  route: PropTypes.object, // react-navigation route object
};

Webview.defaultProps = {
  navigation: null,
  route: null,
};

export default Webview;

// Libraries
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';
// Constants
import { FULL_URLS, NAV } from 'utils/constants';

// Blog

const Blog = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // stop tab from rendering a regular screen and instead render full screen Webview
      e.preventDefault();
      navigation.navigate(NAV.WEB_VIEW, { url: FULL_URLS.FCF_BLOG });
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Box>
      <Text>Loading FCF Blog...</Text>
    </Box>
  );
};

Blog.propTypes = {
  navigation: PropTypes.object, // react-navigation navigation object
};

Blog.defaultProps = {
  navigation: null,
};

export default Blog;

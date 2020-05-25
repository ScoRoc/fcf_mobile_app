// Libraries
import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
// Atoms
import { Box, Img, Text, TouchableIOSOpacity } from 'atoms';
// Announcement Organisms
// import LikeStrip from '../LikeStrip';
import LikeStripFOO from './LikeStripFOO';
// Announcement Constants
import { IMAGES } from '../../constants';

// AnnouncementStrip

const AnnouncementStrip = ({ announcement }) => {
  console.log('announcement: ', announcement);
  // Dimensions

  const { width } = Dimensions.get('window');
  const imgWidth = width * 0.8;

  const imgHeight = imgWidth / IMAGES.ASPECT_RATIO;
  const margin = Math.floor(width * 0.1);

  // Return

  return (
    <Box
      backgroundColor='darkslateblue'
      flex={1}
      marginBottom={20}
      marginTop={20}
      paddingBottom={20}
      paddingTop={20}
    >
      {announcement?.image?.cloudinary?.croppedUrl ? (
        <TouchableIOSOpacity marginBottom={20} marginLeft={margin} marginRight={margin}>
          <Img
            height={imgHeight}
            source={{ uri: announcement?.image?.cloudinary?.croppedUrl }}
            width={imgWidth}
          />
        </TouchableIOSOpacity>
      ) : (
        <Box
          backgroundColor='grey'
          height={imgHeight}
          marginBottom={20}
          marginLeft={margin}
          marginRight={margin}
          width={imgWidth}
        />
      )}

      <Text marginBottom={20} paddingLeft={10} paddingRight={10}>
        {announcement.description}
      </Text>
      <LikeStripFOO marginLeft={10} marginRight={10} width={width - margin * 2} />
    </Box>
  );
};

AnnouncementStrip.propTypes = {
  announcement: PropTypes.object, // announcement db object
};

AnnouncementStrip.defaultProps = {
  announcement: null,
};

export default AnnouncementStrip;

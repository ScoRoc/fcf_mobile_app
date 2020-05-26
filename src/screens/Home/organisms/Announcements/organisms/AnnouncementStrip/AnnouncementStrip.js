// Libraries
import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
// Atoms
import { Box, Img, Text, TouchableNoFeedback } from 'atoms';
// Announcement Organisms
import LikeStrip from '../LikeStrip/LikeStrip';
// Announcement Constants
import { IMAGES } from '../../constants';

// AnnouncementStrip

const AnnouncementStrip = ({ announcement, onImgPress, ...props }) => {
  // Dimensions

  const { width } = Dimensions.get('window');
  const imgWidth = width * 0.8;

  const imgHeight = imgWidth / IMAGES.ASPECT_RATIO;
  const margin = Math.floor(width * 0.1);

  // Functions

  const handlePress = e => {
    props.navigation.navigate(WEB_VIEW, { url: announcement.url });
    onImgPress?.(e);
  };

  // Return

  return (
    <Box
      backgroundColor='darkslateblue'
      flex={1}
      marginBottom={20}
      marginTop={20}
      paddingBottom={20}
      paddingTop={20}
      {...props}
    >
      {announcement?.image?.cloudinary?.croppedUrl ? (
        <TouchableNoFeedback
          marginBottom={20}
          marginLeft={margin}
          marginRight={margin}
          onPress={handlePress}
        >
          <Img
            height={imgHeight}
            source={{ uri: announcement?.image?.cloudinary?.croppedUrl }}
            width={imgWidth}
          />
        </TouchableNoFeedback>
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
      <LikeStrip
        likes={announcement.likedBy.length}
        marginLeft={margin}
        marginRight={margin}
        width={width - margin * 2}
      />
    </Box>
  );
};

AnnouncementStrip.propTypes = {
  announcement: PropTypes.object, // announcement db object
  onImgPress: PropTypes.func,
};

AnnouncementStrip.defaultProps = {
  announcement: null,
  onImgPress: null,
};

export default AnnouncementStrip;

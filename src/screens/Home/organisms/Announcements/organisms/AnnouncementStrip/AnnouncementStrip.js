// Libraries
import React, { useContext, useGlobal } from 'reactn';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
// Atoms
import { Box, Img, Text, TouchableIOSHighlight } from 'atoms';
// Organisms
import DoubleTouch from 'organisms/DoubleTouch';
// Home Context
import { HomeContext } from 'home-screen/templates/HomeTemplate/HomeTemplate';
// Announcement Organisms
import LikeStrip from '../LikeStrip/LikeStrip';
// Announcement Constants
import { IMAGES } from '../../constants';
// Constants
import { NAV } from 'utils/constants';

// AnnouncementStrip

const AnnouncementStrip = ({ announcement, onImgPress, onImgDoublePress, ...props }) => {
  // Global

  const [user] = useGlobal('user');

  // Context

  const { navigation, viewAnnouncement } = useContext(HomeContext);

  // Dimensions

  const { width } = Dimensions.get('window');
  const imgWidth = width * 0.8;

  const imgHeight = imgWidth / IMAGES.ASPECT_RATIO;
  const margin = Math.floor(width * 0.1);

  // Functions

  const handleImgDoublePress = e => {
    handleLike(e);
    onImgDoublePress?.(e);
  };

  const handleLike = e => {
    // TODO ADD LIKE VIA SOCKET
    console.log('liking...');
    console.log('e: ', e);
  };

  const handleStripPress = e => {
    navigation.navigate(NAV.WEB_VIEW, { url: announcement.url });
    if (!announcement.viewedBy.includes(user._id)) {
      viewAnnouncement({ announcementId: announcement._id, viewedByUserId: user._id });
    }
  };

  // Return

  return (
    <TouchableIOSHighlight marginBottom={20} marginTop={20} onPress={handleStripPress}>
      <Box backgroundColor='darkslateblue' flex={1} paddingBottom={20} paddingTop={20} {...props}>
        {announcement?.image?.cloudinary?.croppedUrl ? (
          <Box marginBottom={20} marginLeft={margin} marginRight={margin}>
            <DoubleTouch onDoublePress={handleImgDoublePress} onPress={e => onImgPress?.(e)}>
              <Img
                height={imgHeight}
                source={{ uri: announcement?.image?.cloudinary?.croppedUrl }}
                width={imgWidth}
              />
            </DoubleTouch>
          </Box>
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

        <Text fontSize={18} marginBottom={20} paddingLeft={margin} paddingRight={margin}>
          {announcement.description}
        </Text>
        <LikeStrip
          likes={announcement.likedBy.length}
          marginLeft={margin}
          marginRight={margin}
          onHeartPress={handleLike}
          width={width - margin * 2}
        />
      </Box>
    </TouchableIOSHighlight>
  );
};

AnnouncementStrip.propTypes = {
  announcement: PropTypes.object, // announcement db object
  onImgPress: PropTypes.func,
  onImgDoublePress: PropTypes.func,
};

AnnouncementStrip.defaultProps = {
  announcement: null,
  onImgPress: null,
  onImgDoublePress: null,
};

export default AnnouncementStrip;

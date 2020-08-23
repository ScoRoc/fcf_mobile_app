// Libraries
import React, { useGlobal } from 'reactn';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
// Atoms
import { Box, Img, Text, TouchableIOSHighlight } from 'atoms';
// Molecules
import { LikeStrip } from 'molecules';
// Organisms
import DoubleTouch from 'organisms/DoubleTouch';
// Announcement Constants
import { IMAGES } from '../../constants';

// AnnouncementStrip

const AnnouncementStrip = ({
  announcement,
  onImgPress,
  onImgDoublePress,
  onLike,
  onPress,
  ...props
}) => {
  // Global

  const [user] = useGlobal('user');

  // Dimensions

  const { width } = Dimensions.get('window');
  const imgWidth = width * 0.8;

  const imgHeight = imgWidth / IMAGES.ASPECT_RATIO;
  const margin = Math.floor(width * 0.1);

  // Functions

  const handleImgDoublePress = e => {
    onLike?.({ announcement, e });
    onImgDoublePress?.(e);
  };

  // Return

  return (
    <TouchableIOSHighlight
      marginBottom={20}
      marginTop={20}
      onPress={e => onPress({ announcement, e })}
    >
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
          isLiked={announcement?.likedBy?.includes(user?._id)}
          likes={announcement.likedBy.length}
          marginLeft={margin}
          marginRight={margin}
          onHeartPress={e => onLike?.({ announcement, e })}
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
  onLike: PropTypes.func.isRequired,
  onPress: PropTypes.func,
};

AnnouncementStrip.defaultProps = {
  announcement: null,
  onImgPress: null,
  onImgDoublePress: null,
  onLike: null,
  onPress: null,
};

export default AnnouncementStrip;

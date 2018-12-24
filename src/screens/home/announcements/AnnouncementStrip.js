import React from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import LeftImgAnnouncement from './LeftImgAnnouncement';
import RightImgAnnouncement from './RightImgAnnouncement';

export default AnnouncementStrip = props => {
  const { img, imgHeight, imgLeft, imgWidth, padding, text, textWrapWidth } = props;
  const textPadding = {paddingLeft: padding, paddingRight: padding};
  const position  = imgLeft
                  ? <LeftImgAnnouncement
                    handlePress={props.handlePress}
                    img={img}
                    imgHeight={imgHeight}
                    imgWidth={imgWidth}
                    text={text}
                    textPadding={textPadding}
                    textWrapWidth={textWrapWidth}
                    />
                  //     {/* CLICK ON ANNOUNCEMENT IS HYPERLINK TO WEB */}
                  //     {/* DOUBLE CLICK ON PIC TO HYPERLINK TO WEB */}
                  //       {/* ADD HEART BUTTON AND HOW MANY PPL HAVE LIKED IT */}
                  : <RightImgAnnouncement
                      img={img}
                      imgHeight={imgHeight}
                      imgWidth={imgWidth}
                      text={text}
                      textPadding={textPadding}
                      textWrapWidth={textWrapWidth}
                    />;
  return (
    <View style={styles.view}>{position}</View>
  )
};

const styles = EStyleSheet.create({
  $spacing: '10rem',
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '$spacing',
    marginBottom: '$spacing',
    paddingTop: '$spacing',
    paddingBottom: '$spacing',
    backgroundColor: '$greyDark',
  },
});

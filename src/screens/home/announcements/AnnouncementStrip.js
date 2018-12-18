import React from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default AnnouncementStrip = props => {
  const { img, imgHeight, imgLeft, imgWidth, padding, text, textWrapWidth } = props;
  const textPadding = {paddingLeft: padding, paddingRight: padding};
  const position  = imgLeft
                  ? <>
                      <Image style={{height: imgHeight, width: imgWidth}} source={{uri: img}} />
                      <View style={[styles.textWrap, {width: textWrapWidth}, textPadding]}>
                        <Text>{text}</Text>
                      </View>
                    </>
                  : <>
                      <View style={[styles.textWrap, {width: textWrapWidth}, textPadding]}>
                        <Text>{text}</Text>
                      </View>
                      <Image style={{height: imgHeight, width: imgWidth}} source={{uri: img}} />
                    </>;
  return (
    <View style={styles.view}>{position}</View>
  )
};

const styles = EStyleSheet.create({
  $spacing: '10rem',
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '$spacing',
    marginBottom: '$spacing',
    paddingTop: '$spacing',
    paddingBottom: '$spacing',
    backgroundColor: 'grey',
  },
  textWrap: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

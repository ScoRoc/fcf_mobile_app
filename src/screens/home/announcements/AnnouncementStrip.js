import React from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default AnnouncementStrip = props => {
  const { img, imgHeight, imgLeft, imgWidth, padding, text, textWrapWidth } = props;
  const textPadding = {paddingLeft: padding, paddingRight: padding};
  const position  = imgLeft
                  ? <>
                      <View style={[styles.imgView, {height: imgHeight, width: imgWidth}]}>
                        <Image style={{height: imgHeight, width: imgWidth}} source={{uri: img}} />
                      </View>
                      {/* CLICK ON ANNOUNCEMENT IS HYPERLINK TO WEB */}
                      {/* DOUBLE CLICK ON PIC TO HYPERLINK TO WEB */}
                      <View style={[styles.textWrap, {width: textWrapWidth}, textPadding]}>
                        {/* ADD HEART BUTTON AND HOW MANY PPL HAVE LIKED IT */}
                        <Text style={styles.text}>{text}</Text>
                      </View>
                    </>
                  : <>
                      <View style={[styles.textWrap, {width: textWrapWidth}, textPadding]}>
                        <Text style={styles.text}>{text}</Text>
                      </View>
                      <Image style={[styles.imgView, {height: imgHeight, width: imgWidth}]} source={{uri: img}} />
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
    backgroundColor: '$greyDark',
  },
  imgView: {
    borderColor: 'red',
    borderWidth: '2rem',
  },
  textWrap: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
    color: '$white',
    fontSize: '16rem',
  },
});

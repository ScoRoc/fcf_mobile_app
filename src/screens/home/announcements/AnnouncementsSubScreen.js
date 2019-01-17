import React from 'react';
import { Button, Dimensions, Image, ScrollView, RefreshControl, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import AnnouncementStrip from './AnnouncementStrip';

import useAxios from '../../../utils/axios-helpers';
import { apiUrl } from '../../../utils/global-variables';

const path = `${apiUrl}/announcements`;
const { getWithAxios } = useAxios(path);

const screenWidth = Dimensions.get('window').width;

//////////////////////////////
const imgWidthTemp = Math.round(screenWidth * .3);
const imgHeightTemp = Math.round(imgWidthTemp / 4 * 3);
// const imgHeightTemp = Math.round(imgWidthTemp);

const fakeAnnouncements = () => {
  const fakeAnnouncementsObj = {
    one: {
      text: 'Drinks at Optimism',
      image: `https://www.placecage.com/c/${imgWidthTemp}/${imgHeightTemp}`,
    },
    two: {
      text: 'Cancer Drive',
      image: `https://www.placecage.com/c/${imgWidthTemp}/${imgHeightTemp}`,
    },
    three: {
      text: '5k Run for ABC',
      image: `https://www.placecage.com/c/${imgWidthTemp}/${imgHeightTemp}`,
    },
    four: {
      text: 'Lorem ipsum dolor amet kale chips biodiesel gentrify',
      image: `https://www.placecage.com/c/${imgWidthTemp}/${imgHeightTemp}`,
    },
    five: {
      text: 'Lorem ipsum dolor amet gluten-free etsy four loko normcore. Post-ironic bushwick lomo.',
      image: `https://www.placecage.com/c/${imgWidthTemp}/${imgHeightTemp}`,
    },
    six: {
      text: 'Lorem ipsum dolor amet jean shorts scenester everyday carry, cloud bread waistcoat mustache selvage 8-bit post-ironic flexitarian. Etsy farm-to-table.',
      image: `https://www.placecage.com/c/${imgWidthTemp}/${imgHeightTemp}`,
    },
  };
  return {
    getAllAnnouncements: (() => fakeAnnouncementsObj)(),
  }
};
const { getAllAnnouncements } = fakeAnnouncements();
//////////////////////////////

class AnnouncementsSubScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      announcements: null,
      refreshing: false,
    }
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    getWithAxios().then(result => {
      this.setState({ announcements: result.data.announcements, refreshing: false });
    });
  }

  componentDidMount() {
    getWithAxios().then(result => {
      this.setState({ announcements: result.data.announcements });
    });
  }

  render() {
    const width = () => EStyleSheet.value('$width');
    const yellow = () => EStyleSheet.value('$yellow');
    const imgWidth = width() * .3;
    const imgHeight = imgWidth / 4 * 3;
    const leftoverSpace = width() - imgWidth;
    const padding = leftoverSpace * .1 / 2;
    const textWrapWidth = leftoverSpace - padding * 2;
    // const announcements = Object.keys(getAllAnnouncements).map((announcement, i) => {
    const announcements = this.state.announcements
                        ? this.state.announcements.reverse().map((announcement, i) => {
                            const imgLeft = i % 2 === 0 ? true : false;
                            return (
                              <AnnouncementStrip
                                img={announcement.imgUrl}
                                imgHeight={imgHeight}
                                imgLeft={imgLeft}
                                imgWidth={imgWidth}
                                key={i}
                                padding={padding}
                                text={announcement.announcementText}
                                // textWrapWidth={textWrapWidth}
                                textWrapWidth={leftoverSpace}
                                url={announcement.url}
                              />
                            );
                          })
                          : null;
    return (
      <View style={{width: width()}}>
        <ScrollView
          refreshControl={
            <RefreshControl
              colors={[yellow]}
              onRefresh={this.onRefresh}
              refreshing={this.state.refreshing}
              tintColor={yellow()}
            />
          }
        >
          {announcements}
        </ScrollView>
      </View>
    )
  }
};

const styles = EStyleSheet.create({
  text: {
    // fontSize: '22rem'
  },
});

export default AnnouncementsSubScreen;

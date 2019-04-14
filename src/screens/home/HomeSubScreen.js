import React from 'react';
import { Button, Dimensions, Image, ScrollView, RefreshControl, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import AnnouncementStrip from './AnnouncementStrip';

import { getIndex } from '../../utils/helpers';
import useAxios from '../../utils/axios-helpers';
import { apiUrl } from '../../utils/global-variables';

const path = `${apiUrl}/announcements`;
const { getWithAxios } = useAxios(path);

const screenWidth = Dimensions.get('window').width;

class AnnouncementsSubScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      announcements: null,
      refreshing: false,
      updated: false,
    }
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    getWithAxios().then(result => {
      this.setState({ announcements: result.data.announcements.reverse(), refreshing: false });
    });
  }

  updateAnnouncement = ({ announcementId, userId }) => {
    const announcements = this.state.announcements.slice(0);
    const idx = getIndex('_id', announcements, announcementId);
    const announcement = announcements[idx];
    const { likes } = announcement;
    likes.includes(userId)
      ? likes.splice( likes.indexOf(userId), 1 )
      : likes.push(userId);
    this.setState({ announcements, updated: true });
  }

  componentDidMount() {
    getWithAxios().then(result => {
      this.setState({ announcements: result.data.announcements.reverse() });
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
                        ? this.state.announcements.map((announcement, i) => {
                            const imgLeft = i % 2 === 0 ? true : false;
                            return (
                              <AnnouncementStrip
                                announcement={announcement}
                                finishUpdate={() => this.setState({ updated: false})}
                                imgHeight={imgHeight}
                                imgLeft={imgLeft}
                                imgWidth={imgWidth}
                                key={announcement._id}
                                padding={padding}
                                // textWrapWidth={textWrapWidth}
                                textWrapWidth={leftoverSpace}
                                updateAnnouncement={this.updateAnnouncement}
                                updated={this.state.updated}
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

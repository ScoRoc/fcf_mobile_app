import React from 'react';
import { Dimensions, RefreshControl, ScrollView, StatusBar, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import AnnouncementStrip from './AnnouncementStrip';

import { getIndex } from '../../utils/helpers';
import useAxios from '../../utils/axios-helpers';
import { apiUrl } from '../../utils/global-variables';

const path = `${apiUrl}/announcements`;
const { getWithAxios } = useAxios(path);

const screenWidth = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: null,
      refreshing: false,
      updated: false,
    };
  }

  static navigationOptions = {
    header: null,
  };

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
    const imgWidth = width() * .8;
    const imgHeight = imgWidth / 15 * 8;
    const padding = width() * .1;
    const announcements = this.state.announcements &&
                          this.state.announcements.map((announcement, i) => {
                            return (
                              <AnnouncementStrip
                                announcement={announcement}
                                finishUpdate={() => this.setState({ updated: false})}
                                imgHeight={imgHeight}
                                imgWidth={imgWidth}
                                key={announcement._id}
                                padding={padding}
                                updateAnnouncement={this.updateAnnouncement}
                                updated={this.state.updated}
                              />
                            );
                          });
    return (
      <View style={styles.screen}>
        <StatusBar barStyle='light-content' />
        <Text style={[ styles.headerText, {paddingLeft: padding } ]}>What's New</Text>

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
    );
  };
};

const styles = EStyleSheet.create({
  screen: {
    paddingTop: '65rem',
    // paddingLeft: '20rem',
    // paddingRight: '20rem',
    flex: 1,
    backgroundColor: '$blackBG',
  },
  headerView: {
    paddingTop: '50rem',
  },
  headerText: {
    marginBottom: '10rem',
    color: '$white',
    fontSize: '30rem',
  },
});

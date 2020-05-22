// Libraries
import React, { useEffect, useGlobal, useState } from 'reactn';
import { Dimensions, RefreshControl, ScrollView, StatusBar, Text, View } from 'react-native';
import io from 'socket.io-client'
import EStyleSheet from 'react-native-extended-stylesheet';
// Components
import AnnouncementStrip from '../announcements/AnnouncementStrip';
// Helper Funcs
import { getIndex } from '../../utils/helpers';
import useAxios from '../../utils/axios-helpers';
import { urlHostName } from '../../utils/global-variables';
// String Constants
import {
  _ID, _SLASH, ANNOUNCEMENTS, ANNOUCEMENT_LIKE_UPDATE, LIGHT_CONTENT, WIDTH_$, WINDOW, YELLOW_$
} from '../../utils/stringConstants';

const path = `${_SLASH}${ANNOUNCEMENTS}`;
const url = `${urlHostName}${path}`;
const { getWithAxios } = useAxios(url);

const announcementsSocket = io(url)

const screenWidth = Dimensions.get(WINDOW).width;

const HomeScreen = props => {
  // Global State
  const [user] = useGlobal('user');
  // State
  const [announcements, setAnnouncements] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [updated, setUpdated] = useState(false);
  // Effects
  useEffect(() => {
    announcementsSocket.on(ANNOUCEMENT_LIKE_UPDATE, data => {
      const { announcement, userId } = data
      const userIdFromRedux = user._id
      if (userId !== userIdFromRedux) {
        const newAnnouncements = announcements.map(mappedAnnouncement => {
          return mappedAnnouncement._id === announcement._id
                                            ? announcement
                                            : mappedAnnouncement
        })
        setAnnouncements(newAnnouncements);
      }
    });
    getWithAxios().then(result => {
      setAnnouncements(result.data.announcements.reverse());
    });
    return () => announcementsSocket.close();
  });
  // Functions
  const onRefresh = () => {
    setRefreshing(true);
    getWithAxios().then(result => {
      setAnnouncements(result.data.announcements.reverse());
      setRefreshing(false);
    });
  }
  const updateAnnouncement = ({ announcementId, userId }) => {
    const updatedAnnouncements = announcements.slice(0);
    const idx = getIndex(_ID, announcements, announcementId);
    const announcement = announcements[idx];
    const { likes } = announcement;
    likes.includes(userId)
      ? likes.splice( likes.indexOf(userId), 1 )
      : likes.push(userId);
    setAnnouncements(updatedAnnouncements);
    setUpdated(true);
  }
  // Variables
  const width = () => EStyleSheet.value(WIDTH_$);
  const yellow = () => EStyleSheet.value(YELLOW_$);
  const imgWidth = width() * .8;
  const imgHeight = imgWidth / 15 * 8;
  const padding = width() * .1;
  // Components
  const announcementStrips = announcements &&
                        announcements.map((announcement, i) => {
                          return (
                            <AnnouncementStrip
                              announcement={announcement}
                              finishUpdate={() => setUpdated(false)}
                              imgHeight={imgHeight}
                              imgWidth={imgWidth}
                              key={announcement._id}
                              padding={padding}
                              updateAnnouncement={updateAnnouncement}
                              updated={updated}
                            />
                          );
                        });
  return (
    <View style={styles.screen}>
      <StatusBar barStyle={LIGHT_CONTENT} />
      <Text style={[ styles.headerText, { paddingLeft: padding } ]}>What's New</Text>

      <ScrollView
        refreshControl={
          <RefreshControl
            colors={[yellow]}
            onRefresh={onRefresh}
            refreshing={refreshing}
            tintColor={yellow()}
          />
        }
      >
        {announcementStrips}
      </ScrollView>

    </View>
  );
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

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;

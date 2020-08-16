// Libraries
import React, { useDispatch, useEffect } from 'reactn';
import PropTypes from 'prop-types';
import axios from 'axios';
import io from 'socket.io-client';
// Home Context
import HomeContext from './HomeContext';
// Home Templates
import HomeTemplate from '../../templates';
// Constants
import { API, PATHS, SOCKETS } from 'utils/constants';

// Sockets

const announcementSocket = io(`${API.DEV}${SOCKETS.NAMESPACES.ANNOUNCEMENTS}`);
const eventSocket = io(`${API.DEV}${SOCKETS.NAMESPACES.EVENTS}`);

// URL Deets

// const baseUrl = API.PROD;
const baseUrl = API.DEV;

// HomeLogic

const HomeLogic = ({ navigation, route }) => {
  // Global

  // const [isLoading, setIsLoading] = useGlobal('isLoading');

  // Dispatch

  const setAnnouncement = useDispatch('setAnnouncement');
  const setAnnouncements = useDispatch('setAnnouncements');
  const setEvent = useDispatch('setEvent');
  const setEvents = useDispatch('setEvents');

  // Effects

  useEffect(() => {
    getAnnouncements();
    getEvents();
  }, []);

  // Announcements API

  const getAnnouncements = async () => {
    const url = `${baseUrl}${PATHS.ANNOUNCEMENTS}`;

    try {
      const res = await axios.get(url);
      // console.log('res in AnnouncementsLogic: ', res);
      // console.log('res.data in AnnouncementsLogic: ', res.data);
      // res.status === 200 ? handleSuccess(res) : handleErrors(res);
      // TODO Fix return to be based off if error or not
      setAnnouncements({ announcements: res.data.announcements });
      return true;
    } catch (err) {
      console.log('err: ', err);
    }
  };

  const viewAnnouncement = async ({ announcementId, viewedByUserId }) => {
    const url = `${API.DEV}${PATHS.ANNOUNCEMENTS}/${announcementId}${PATHS.VIEWED_BY}`;
    try {
      const res = await axios.patch(url, {}, { params: { viewedByUserId } });
      console.log('res: ', res);
      setAnnouncement({ announcement: res.data });
    } catch (err) {
      console.log('err: ', err);
    }
  };

  // Events API

  const getEvents = async () => {
    const url = `${baseUrl}${PATHS.EVENTS}`;

    try {
      const res = await axios.get(url);
      // console.log('res in EventsLogic: ', res);
      // console.log('res.data in EventsLogic: ', res.data);
      // res.status === 200 ? handleSuccess(res) : handleErrors(res);
      // TODO Fix return to be based off if error or not
      setEvents({ events: res.data.events });
      return true;
    } catch (err) {
      console.log('err: ', err);
    }
  };

  const viewEvent = async ({ eventId, viewedByUserId }) => {
    const url = `${API.DEV}${PATHS.EVENTS}/${eventId}${PATHS.VIEWED_BY}`;
    try {
      const res = await axios.patch(url, {}, { params: { viewedByUserId } });
      console.log('res: ', res);
      setEvent({ event: res.data });
    } catch (err) {
      console.log('err: ', err);
    }
  };

  // Sorted Home

  // TODO fix sorting
  // const sortedWods = Object.values(announcements.data).sort((a, b) => {
  //   return announcements.direction === QUERY_STRING.DIRECTION.ASC
  //     ? moment(a.date).isBefore(moment(b.date))
  //       ? -1
  //       : 1
  //     : moment(a.date).isBefore(moment(b.date))
  //     ? 1
  //     : -1;
  // });

  // Return

  return (
    <HomeContext.Provider
      value={{
        announcementContext: {
          getAnnouncements,
          setAnnouncement,
          socket: announcementSocket,
          viewAnnouncement,
        },
        eventContext: {
          setEvent,
          socket: eventSocket,
          viewEvent,
        },
        navigation,
        route,
      }}
    >
      <HomeTemplate />
    </HomeContext.Provider>
  );
};

HomeLogic.propTypes = {
  navigation: PropTypes.object, // react-navigation navigation object
  route: PropTypes.object, // react-navigation route object
};

HomeLogic.defaultProps = {
  navigation: null,
  route: null,
};

export default HomeLogic;

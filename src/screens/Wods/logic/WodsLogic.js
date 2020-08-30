// Libraries
import React, { useDispatch, useEffect } from 'reactn';
import PropTypes from 'prop-types';
import axios from 'axios';
import io from 'socket.io-client';
// Wods Templates
import WodsTemplate from '../templates/WodsTemplate';
// Constants
import { API, FULL_URLS, NAV, PATHS, SOCKETS } from 'utils/constants';

// Sockets

const socket = io(`${API.DEV}${SOCKETS.NAMESPACES.WODS}`);

// URL Deets

// const baseUrl = API.PROD;
const baseUrl = API.DEV;

// WodsLogic

const WodsLogic = ({ navigation }) => {
  // Dispatch

  const setCurrentWeekWods = useDispatch('setCurrentWeekWods');
  const setWod = useDispatch('setWod');
  const setWodInCurrentWeekWods = useDispatch('setWodInCurrentWeekWods');

  // Effects

  useEffect(() => {
    getCurrentWeekWods();
  }, []);

  useEffect(() => {
    socket.on('invalidLike', msg => console.log('msg: ', msg));
    // TODO verify is other sockets are receiving an update here
    socket.on('likeUpdate', wod => setWod({ wod }));
  }, []);

  // Wods API

  const getCurrentWeekWods = async () => {
    const url = `${baseUrl}${PATHS.WODS}${PATHS.CURRENT_WEEK}`;

    try {
      const res = await axios.get(url);
      // console.log('res in AnnouncementsLogic: ', res);
      // console.log('res.data in AnnouncementsLogic: ', res.data);
      // res.status === 200 ? handleSuccess(res) : handleErrors(res);
      // TODO Fix return to be based off if error or not
      setCurrentWeekWods({ currentWeekWods: res.data.currentWeekWods });
      console.log('res.data.currentWeekWods: ', res.data.currentWeekWods);
      return true;
    } catch (err) {
      console.log('err: ', err);
    }
  };

  // const getWods = async () => {
  //   const url = `${baseUrl}${PATHS.WODS}`;

  //   try {
  //     const res = await axios.get(url);
  //     console.log('url: ', url);

  //     // console.log('res in AnnouncementsLogic: ', res);
  //     // console.log('res.data in AnnouncementsLogic: ', res.data);
  //     // res.status === 200 ? handleSuccess(res) : handleErrors(res);
  //     // TODO Fix return to be based off if error or not
  //     setWods({ wods: res.data.wods });
  //     console.log('res.data.wods: ', res.data.wods);
  //     return true;
  //   } catch (err) {
  //     console.log('err: ', err);
  //   }
  // };

  // Functions

  const handleLike = ({ user, wod }) => {
    wod.likedBy.includes(user._id)
      ? wod.likedBy.splice(wod.likedBy.indexOf(user._id), 1)
      : wod.likedBy.push(user._id);
    setWodInCurrentWeekWods({ wod });
    socket.emit('like', { userId: user._id, wodId: wod._id });
  };

  const handleRsvpPress = () => {
    navigation.navigate(NAV.WEB_VIEW, { url: FULL_URLS.RSVP });
  };

  // Return

  return (
    <WodsTemplate
      getCurrentWeekWods={getCurrentWeekWods}
      handleLike={handleLike}
      onRsvpPress={handleRsvpPress}
    />
  );
};

WodsLogic.propTypes = {
  navigation: PropTypes.object, // react-navigation navigation object
};

WodsLogic.defaultProps = {
  navigation: null,
};

export default WodsLogic;

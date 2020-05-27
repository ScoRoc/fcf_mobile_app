// Libraries
import React, { useDispatch, useEffect, useGlobal } from 'reactn';
import axios from 'axios';
// Home Templates
import HomeTemplate from '../../templates';
// Constants

import { API, PATHS } from 'utils/constants';
// Announcement Constants
// import { IMG_UPDATE } from '../../constants';

// URL Deets

// const baseUrl = `${API.PROD}${PATHS.ANNOUNCEMENTS}`;
const baseUrl = `${API.DEV}${PATHS.ANNOUNCEMENTS}`;

// HomeLogic

const HomeLogic = ({ navigation, route }) => {
  // Global

  const [announcements] = useGlobal('announcements');
  // const [isLoading, setIsLoading] = useGlobal('isLoading');
  // const [user] = useGlobal('user');

  // Dispatch

  // const removeAnnouncement = useDispatch('removeAnnouncement');
  const setAnnouncement = useDispatch('setAnnouncement');
  const setAnnouncements = useDispatch('setAnnouncements');

  // Effects

  useEffect(() => {
    getAnnouncements();
  }, []);

  // API Callbacks

  const getAnnouncements = async () => {
    try {
      const res = await axios.get(baseUrl);
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

  // const patchAnnouncement = async ({
  //   _id,
  //   crop,
  //   description,
  //   dimensions,
  //   imgFile,
  //   originalAnnouncement,
  //   url,
  // }) => {
  //   console.log('in patch');

  //   if (!description || !url) {
  //     console.log('description, imgFile, and url need to be filled out');
  //     return false;
  //   }

  //   if (!crop || crop.height <= 0 || crop.width <= 0) {
  //     console.log('crop must exist and have a height and width larger than 0');
  //     return false;
  //   }

  //   const { config, data } = buildPatch({
  //     crop,
  //     description,
  //     dimensions,
  //     imgFile,
  //     originalAnnouncement,
  //     url,
  //     userId: user._id,
  //   });

  //   const patchUrl = `${baseUrl}/${_id}`;

  //   console.log('patchUrl: ', patchUrl);
  //   console.log('data: ', data);
  //   console.log('config: ', config);

  //   // setIsLoading(true);
  //   await axios.patch(patchUrl, data, config).then(res => {
  //     console.log('res: ', res);
  //     // setIsLoading(false);
  //     // res.status === 200 ? handleSuccess(res) : handleErrors(res);
  //     setAnnouncement({ announcement: res.data.announcement });
  //     // TODO Fix return to be based off if error or not
  //   });
  //   return true;
  // };

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
    <HomeTemplate
      announcements={announcements}
      // announcements={sortedWods}
      getAnnouncements={getAnnouncements}
      // isLoading={isLoading}
      navigation={navigation}
      route={route}
      // patchAnnouncement={patchAnnouncement}
      viewAnnouncement={viewAnnouncement}
    />
  );
};

export default HomeLogic;

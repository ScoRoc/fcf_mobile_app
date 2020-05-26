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
  // const setAnnouncement = useDispatch('setAnnouncement');
  const setAnnouncements = useDispatch('setAnnouncements');

  // Effects

  useEffect(() => {
    getAnnouncements();
  }, []);

  // API Callbacks

  // const deleteAnnouncement = async _id => {
  //   const url = `${baseUrl}/${_id}`;

  //   // setIsLoading(true);
  //   await axios.delete(url).then(res => {
  //     console.log('res: ', res);
  //     // const updatedHome = {};
  //     // setIsLoading(false);
  //     removeAnnouncement(_id);
  //     // TODO Fix return to be based off if error or not
  //   });
  //   return true;
  // };

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

  // const postAnnouncement = async ({ crop, description, dimensions, imgFile, url }) => {
  //   console.log('in post');
  //   // TODO handle error validation
  //   // if (!date) throw new Error();
  //   if (!description || !dimensions || !imgFile || !url) {
  //     console.log('description, dimensions, imgFile, and url need to be filled out');
  //     return false;
  //   }

  //   if (!crop || crop.height <= 0 || crop.width <= 0) {
  //     console.log('crop must exist and have a height and width larger than 0');
  //     return false;
  //   }

  //   const formData = new FormData();
  //   formData.set('cropHeight', crop.height);
  //   formData.set('cropWidth', crop.width);
  //   formData.set('cropX', crop.x);
  //   formData.set('cropY', crop.y);
  //   formData.set('description', description);
  //   formData.append('imgFile', imgFile);
  //   formData.set('imgHeight', dimensions.height);
  //   formData.set('imgWidth', dimensions.width);
  //   formData.set('url', url);

  //   const config = { headers: { 'Content-Type': 'multipart/form-data' } };

  //   const qs = `?${QUERY_STRING.CREATED_BY_USER.PARAM.value}=${user._id}`;
  //   const postUrl = `${baseUrl}${qs}`;
  //   // setIsLoading(true);
  //   await axios.post(postUrl, formData, config).then(res => {
  //     console.log('res: ', res);
  //     // res.status === 200 ? handleSuccess(res) : handleErrors(res);
  //     // setIsLoading(false);
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
      // deleteAnnouncement={deleteAnnouncement}
      // isLoading={isLoading}
      navigation={navigation}
      route={route}
      // patchAnnouncement={patchAnnouncement}
      // postAnnouncement={postAnnouncement}
    />
  );
};

export default HomeLogic;

import {
  IMAGES_RETRIEVED,
  IMAGE_DETAILS_RETRIEVED,
  IMAGE_HISTORY_RETRIEVED,
  IMAGE_SEARCH_STRING_CHANGED,
} from '../types/image.jsx';
import {
  ERROR_PAGE_CLEAR,
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';
import axios from '../axios/axios.jsx';

const getImages = () => (
  dispatch =>
    axios({
      url: '/images/json',
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });

      const imageData = {};
      for (let i = 0; i < data.length; i += 1) {
        const imageName = data[i].RepoTags ? data[i].RepoTags[0] : data[i].Id;
        imageData[imageName] = data[i];
      }

      dispatch({
        type: IMAGES_RETRIEVED,
        payload: imageData,
      });
    }).catch((error) => {
      const userMessage = error.message;
      dispatch({
        type: ERROR_PAGE_DISPLAY,
        payload: error,
        userMessage,
      });
    }));

const getImageDetail = imageId => (
  dispatch =>
    axios({
      url: `/images/${imageId}/json`,
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });
      dispatch({
        type: IMAGE_DETAILS_RETRIEVED,
        payload: data,
      });
    }).catch((error) => {
      const userMessage = error.message;
      dispatch({
        type: ERROR_PAGE_DISPLAY,
        payload: error,
        userMessage,
      });
    }));

const getImageHistory = imageId => (
  dispatch =>
    axios({
      url: `/images/${imageId}/history`,
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });
      dispatch({
        type: IMAGE_HISTORY_RETRIEVED,
        payload: data,
      });
    }).catch((error) => {
      const userMessage = error.message;
      dispatch({
        type: ERROR_PAGE_DISPLAY,
        payload: error,
        userMessage,
      });
    }));

const imageSearch = event => (
  dispatch => (
    dispatch({
      type: IMAGE_SEARCH_STRING_CHANGED,
      payload: event.target.value,
    })
  ));


const ImageService = {
  getImages,
  getImageDetail,
  getImageHistory,
  imageSearch,
};

export default ImageService;

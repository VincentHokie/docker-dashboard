import {
  VOLUMES_RETRIEVED,
  VOLUME_DETAILS_RETRIEVED,
  VOLUME_SEARCH_STRING_CHANGED,
} from '../types/volume.jsx';
import {
  ERROR_PAGE_CLEAR,
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';
import axios from '../axios/axios.jsx';

const getVolumes = () => (
  dispatch =>
    axios({
      url: '/volumes',
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });

      const volumeData = {};
      const responseVolumes = data.Volumes;
      for (let i = 0; i < responseVolumes.length; i += 1) {
        volumeData[responseVolumes[i].Name] = responseVolumes[i];
      }

      dispatch({
        type: VOLUMES_RETRIEVED,
        payload: volumeData,
      });
    }).catch((error) => {
      const userMessage = error.message;
      dispatch({
        type: ERROR_PAGE_DISPLAY,
        payload: error,
        userMessage,
      });
    }));

const getVolumeDetail = volumeId => (
  dispatch =>
    axios({
      url: `/volumes/${volumeId}`,
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });
      dispatch({
        type: VOLUME_DETAILS_RETRIEVED,
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

const volumeeSearch = event => (
  dispatch => (
    dispatch({
      type: VOLUME_SEARCH_STRING_CHANGED,
      payload: event.target.value,
    })
  ));

const VolumeService = {
  getVolumes,
  getVolumeDetail,
  volumeeSearch,
};

export default VolumeService;

import {
  NETWORKS_RETRIEVED,
  NETWORK_DETAILS_RETRIEVED,
} from '../types/network.jsx';
import {
  ERROR_PAGE_CLEAR,
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';
import axios from '../axios/axios.jsx';

const getNetworks = () => (
  dispatch =>
    axios({
      url: '/networks',
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });

      const networkData = {};
      for (let i = 0; i < data.length; i += 1) {
        networkData[data[i].Name] = data[i];
      }

      dispatch({
        type: NETWORKS_RETRIEVED,
        payload: networkData,
      });
    }).catch((error) => {
      const userMessage = error.data.message;
      dispatch({
        type: ERROR_PAGE_DISPLAY,
        payload: error,
        userMessage,
      });
    }));

const getNetworkDetail = networkId => (
  dispatch =>
    axios({
      url: `/networks/${networkId}`,
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });
      dispatch({
        type: NETWORK_DETAILS_RETRIEVED,
        payload: data,
      });
    }).catch((error) => {
      const userMessage = error.data.message;
      dispatch({
        type: ERROR_PAGE_DISPLAY,
        payload: error,
        userMessage,
      });
    }));

const NetworkService = {
  getNetworks,
  getNetworkDetail,
};

export default NetworkService;

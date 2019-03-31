import {
  NETWORKS_RETRIEVED,
  NETWORK_DETAILS_RETRIEVED,
  NETWORK_SEARCH_STRING_CHANGED,
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
      const userMessage = error.message;
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
      const userMessage = error.message;
      dispatch({
        type: ERROR_PAGE_DISPLAY,
        payload: error,
        userMessage,
      });
    }));

const networkSearch = event => (
  dispatch => (
    dispatch({
      type: NETWORK_SEARCH_STRING_CHANGED,
      payload: event.target.value,
    })
  ));

const NetworkService = {
  getNetworks,
  getNetworkDetail,
  networkSearch,
};

export default NetworkService;

import {
  NODES_RETRIEVED,
  NODE_DETAILS_RETRIEVED,
  NODE_SEARCH_STRING_CHANGED,
} from '../types/node.jsx';
import {
  ERROR_PAGE_CLEAR,
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';
import axios from '../axios/axios.jsx';

const getNodes = () => (
  dispatch =>
    axios({
      url: '/nodes',
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });

      const containerData = {};
      for (let i = 0; i < data.length; i += 1) {
        containerData[data[i].Names[0]] = data[i];
      }

      dispatch({
        type: NODES_RETRIEVED,
        payload: containerData,
      });
    }).catch((error) => {
      let userMessage = error.message;
      if (error.status === 503) {
        userMessage = 'Swarm mode must be enabled for this to work';
      }

      dispatch({
        type: ERROR_PAGE_DISPLAY,
        payload: error,
        userMessage,
      });
    }));

const getNodeDetail = nodeId => (
  dispatch =>
    axios({
      url: `/nodes/${nodeId}`,
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });
      dispatch({
        type: NODE_DETAILS_RETRIEVED,
        payload: data,
      });
    }).catch((error) => {
      let userMessage = error.message;
      if (error.status === 503) {
        userMessage = 'Swarm mode must be enabled for this to work';
      }

      dispatch({
        type: ERROR_PAGE_DISPLAY,
        payload: error,
        userMessage,
      });
    }));

const nodeSearch = event => (
  dispatch => (
    dispatch({
      type: NODE_SEARCH_STRING_CHANGED,
      payload: event.target.value,
    })
  ));

const NodeService = {
  getNodes,
  getNodeDetail,
  nodeSearch,
};

export default NodeService;

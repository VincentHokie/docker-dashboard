import ndjsonStream from 'can-ndjson-stream';
import {
  CONTAINERS_RETRIEVED,
  CONTAINER_DETAILS_RETRIEVED,
  CONTAINER_EVENTS_RETRIEVED,
  CONTAINER_LOGS_RETRIEVED,
  CONTAINER_PROCESSES_RETRIEVED,
  CONTAINER_STATS_RETRIEVED,
} from '../types/container.jsx';
import {
  ERROR_PAGE_CLEAR,
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';
import axios from '../axios/axios.jsx';


const getContainers = () => (
  dispatch =>
    axios({
      url: '/containers/json',
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
        type: CONTAINERS_RETRIEVED,
        payload: containerData,
      });
    }).catch((error) => {
      const userMessage = error.data.message;
      dispatch({
        type: ERROR_PAGE_DISPLAY,
        payload: error,
        userMessage,
      });
    }));

const getContainerDetail = containerId => (
  dispatch =>
    axios({
      url: `/containers/${containerId}/json`,
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });
      dispatch({
        type: CONTAINER_DETAILS_RETRIEVED,
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

const getContainerProcesses = containerId => (
  dispatch =>
    axios({
      url: `/containers/${containerId}/top`,
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });
      dispatch({
        type: CONTAINER_PROCESSES_RETRIEVED,
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

const getContainerLogs = containerId => (
  dispatch =>
    axios({
      url: `/containers/${containerId}/logs?stdout=true&stderr=true`,
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });
      dispatch({
        type: CONTAINER_LOGS_RETRIEVED,
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

const getContainerEvents = () => (
  (dispatch) => {
    fetch('http://localhost:2345/events?filters={"type":{"container":true}}')
      .then(response => ndjsonStream(response.body))
      .then((exampleStream) => {
        let read;
        exampleStream.getReader().read().then(read = (result) => {
          if (result.done) return;
          dispatch({
            type: CONTAINER_EVENTS_RETRIEVED,
            payload: result.value,
          });

          exampleStream.getReader().read().then(read);
        });
      }).catch((error) => {
        const userMessage = error.data.message;
        dispatch({
          type: ERROR_PAGE_DISPLAY,
          payload: error,
          userMessage,
        });
      });
  });

const getContainerStats = containerId => (
  dispatch =>
    axios({
      url: `/containers/${containerId}/stats?stream=false`,
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });
      dispatch({
        type: CONTAINER_STATS_RETRIEVED,
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

const ContainerService = {
  getContainers,
  getContainerDetail,
  getContainerEvents,
  getContainerLogs,
  getContainerStats,
  getContainerProcesses,
};

export default ContainerService;

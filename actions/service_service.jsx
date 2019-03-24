import {
  SERVICES_RETRIEVED,
  SERVICE_DETAILS_RETRIEVED,
  SERVICE_LOGS_RETRIEVED,
  SERVICE_SEARCH_STRING_CHANGED,
} from '../types/service.jsx';
import {
  ERROR_PAGE_CLEAR,
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';
import axios from '../axios/axios.jsx';

const getServices = () => (
  dispatch =>
    axios({
      url: '/services',
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });

      const serviceData = {};
      for (let i = 0; i < data.length; i += 1) {
        serviceData[data[i].Names] = data[i];
      }

      dispatch({
        type: SERVICES_RETRIEVED,
        payload: serviceData,
      });
    }).catch((error) => {
      let userMessage = error.data.message;
      if (error.status === 503) {
        userMessage = 'Swarm mode must be enabled for this to work';
      }
      dispatch({
        type: ERROR_PAGE_DISPLAY,
        payload: error,
        userMessage,
      });
    }));

const getServiceDetail = serviceId => (
  dispatch =>
    axios({
      url: `/services/${serviceId}`,
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });
      dispatch({
        SERVICE_DETAILS_RETRIEVED,
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

const getServiceLogs = serviceId => (
  dispatch =>
    axios({
      url: `/services/${serviceId}/logs`,
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });
      dispatch({
        SERVICE_LOGS_RETRIEVED,
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

const serviceSearch = event => (
  dispatch => (
    dispatch({
      type: SERVICE_SEARCH_STRING_CHANGED,
      payload: event.target.value,
    })
  ));

const ServiceService = {
  getServices,
  getServiceDetail,
  getServiceLogs,
  serviceSearch,
};

export default ServiceService;

import {
  SECRETS_RETRIEVED,
  SECRET_DETAILS_RETRIEVED,
} from '../types/secret.jsx';
import {
  ERROR_PAGE_CLEAR,
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';
import axios from '../axios/axios.jsx';

const getSecrets = () => (
  dispatch =>
    axios({
      url: '/secrets',
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
        type: SECRETS_RETRIEVED,
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

const getSecretDetail = secretId => (
  dispatch =>
    axios({
      url: `/secrets/${secretId}`,
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });
      dispatch({
        type: SECRET_DETAILS_RETRIEVED,
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

const SecretService = {
  getSecrets,
  getSecretDetail,
};

export default SecretService;

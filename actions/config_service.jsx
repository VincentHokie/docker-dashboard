import {
  CONFIGS_RETRIEVED,
} from '../types/config.jsx';
import {
  ERROR_PAGE_CLEAR,
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';
import axios from '../axios/axios.jsx';

const getConfigs = () =>
  dispatch =>
    axios({
      url: '/configs',
      method: 'GET',
    }).then((data) => {
      dispatch({
        type: ERROR_PAGE_CLEAR,
      });

      const configData = {};
      for (let i = 0; i < data.length; i += 1) {
        configData[data[i].Spec.Name] = data[i];
      }

      dispatch({
        type: CONFIGS_RETRIEVED,
        payload: configData,
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
    });

const ConfigService = {
  getConfigs,
};

export default ConfigService;

/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import baseReducer from './reducers/notification.jsx';
import modalReducer from './reducers/modal.jsx';
import containerReducer from './reducers/container.jsx';
import configReducer from './reducers/config.jsx';
import dockerDaemonReducer from './reducers/docker-daemon.jsx';
import imageReducer from './reducers/image.jsx';
import networkReducer from './reducers/network.jsx';
import nodeReducer from './reducers/node.jsx';
import secretReducer from './reducers/secret.jsx';
import serviceReducer from './reducers/service.jsx';
import volumeReducer from './reducers/volume.jsx';
import errorReducer from './reducers/error.jsx';
import eventsReducer from './reducers/events.jsx';

const reducer = combineReducers({
  baseReducer,
  modalReducer,
  containerReducer,
  configReducer,
  dockerDaemonReducer,
  imageReducer,
  networkReducer,
  nodeReducer,
  secretReducer,
  serviceReducer,
  volumeReducer,
  errorReducer,
  eventsReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

export default store;

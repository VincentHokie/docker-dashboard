import ndjsonStream from 'can-ndjson-stream';
import {
  REGISTER_EVENT_STREAM,
  ABORT_EXISTING_EVENT_STREAM,
  UPDATE_SELECTED_EVENT_TYPES,
  UPDATE_FILTERED_EVENT_TYPES,
} from '../types/events.jsx';
import {
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';
import { BASE_URL } from '../axios/constants.jsx';


const getEvents = (eventType, EVENTS_RECEIVED, objectName, eventTypes = null) => (
  (dispatch, getState) => {
    const { stream } = getState().eventsReducer;
    if (stream[eventType]) return;

    if (stream) {
      dispatch({
        type: ABORT_EXISTING_EVENT_STREAM,
      });
    }

    /* eslint-disable no-undef */
    const controller = new AbortController();
    const { signal } = controller;

    dispatch({
      type: REGISTER_EVENT_STREAM,
      payload: { [eventType]: controller },
      eventTypes,
    });

    fetch(`${BASE_URL}/events?filters={"type":{"${eventType}":true},"${eventType}":{"${objectName}":true}}`, {
      method: 'get',
      signal,
    })
      .then(response => ndjsonStream(response.body))
      .then((exampleStream) => {
        const reader = exampleStream.getReader();
        const doRead = () =>
          reader.read().then(({ done, value }) => {
            if (done) return;
            dispatch({
              type: EVENTS_RECEIVED,
              payload: value,
            });
            doRead();
          });
        doRead();
      }).catch((error) => {
        const userMessage = error.message;
        dispatch({
          type: ERROR_PAGE_DISPLAY,
          payload: error,
          userMessage,
        });
      });
  });

const removeFromSelectedItems = value => (
  (dispatch, getState) => {
    const { selectedEventTypes } = getState().eventsReducer;
    const withItemRemoved = selectedEventTypes.filter(type => value.id !== type.id);

    dispatch({
      type: UPDATE_SELECTED_EVENT_TYPES,
      payload: withItemRemoved,
    });
  }
);

const addToSelectedItems = value => (
  (dispatch, getState) => {
    const { selectedEventTypes, eventTypes } = getState().eventsReducer;
    if (eventTypes.indexOf(value) === -1) {
      return;
    }

    const index = selectedEventTypes.indexOf(value);
    if (index === -1) {
      selectedEventTypes.push({ id: value, name: value });
    }
    dispatch({
      type: UPDATE_SELECTED_EVENT_TYPES,
      payload: selectedEventTypes,
    });
  }
);

const filterTags = userInput => (
  (dispatch, getState) => {
    const { selectedEventTypes, eventTypes } = getState().eventsReducer;

    if (userInput === '') {
      dispatch({
        type: UPDATE_FILTERED_EVENT_TYPES,
        payload: eventTypes,
      });
    }

    const filter = new RegExp(`^${userInput}`, 'i');
    const filteredNames = eventTypes
      .filter(name => filter.test(name))
      .filter(value => !selectedEventTypes.some(type => type.id === value))
      .map(name => name);
    return dispatch({
      type: UPDATE_FILTERED_EVENT_TYPES,
      payload: filteredNames,
    });
  }
);


export default {
  getEvents,
  removeFromSelectedItems,
  addToSelectedItems,
  filterTags,
};

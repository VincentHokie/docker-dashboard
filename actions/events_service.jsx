import ndjsonStream from 'can-ndjson-stream';
import {
  REGISTER_EVENT_STREAM,
  ABORT_EXISTING_EVENT_STREAM,
} from '../types/events.jsx';
import {
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';
import { BASE_URL } from '../axios/constants.jsx';


const getEvents = (eventType, EVENTS_RECEIVED, objectName) => (
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


export default getEvents;

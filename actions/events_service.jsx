import ndjsonStream from 'can-ndjson-stream';
import {
  REGISTER_EVENT_STREAM,
  ABORT_EXISTING_EVENT_STREAM,
} from '../types/events.jsx';
import {
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';


const getEvents = (eventType, EVENTS_RECEIVED) => (
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

    fetch(`http://localhost:2345/events?filters={"type":{"${eventType}":true}}`, {
      method: 'get',
      signal,
    })
      .then(response => ndjsonStream(response.body))
      .then((exampleStream) => {
        let read;
        exampleStream.getReader().read().then(read = (result) => {
          if (result.done) return;
          dispatch({
            type: EVENTS_RECEIVED,
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


export default getEvents;

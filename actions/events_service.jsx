import ndjsonStream from 'can-ndjson-stream';
import {
  CONTAINER_EVENTS_RETRIEVED,
} from '../types/container.jsx';
import {
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';


const getEvents = () => (
  dispatch =>
    fetch('http://localhost:2345/events')
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
      }));

export default getEvents;

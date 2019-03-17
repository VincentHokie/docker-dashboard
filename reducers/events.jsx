import {
  ABORT_EXISTING_EVENT_STREAM,
  REGISTER_EVENT_STREAM,
} from '../types/events.jsx';

const initState = {
  stream: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case ABORT_EXISTING_EVENT_STREAM:
      Object.keys(state.stream).map(streamKey => (
        state.stream[streamKey].abort()
      ));
      return {
        ...state,
        stream: {},
      };
    case REGISTER_EVENT_STREAM:
      return {
        ...state,
        stream: action.payload,
      };
    default:
      return state;
  }
};

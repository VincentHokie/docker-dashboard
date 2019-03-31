import {
  ABORT_EXISTING_EVENT_STREAM,
  REGISTER_EVENT_STREAM,
  UPDATE_SELECTED_EVENT_TYPES,
  UPDATE_FILTERED_EVENT_TYPES,
} from '../types/events.jsx';

const initState = {
  stream: {},
  selectedEventTypes: [],
  filteredOptions: [],
  eventTypes: ['create', 'update', 'remove'],
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
        eventTypes: action.eventTypes ? action.eventTypes : state.eventTypes,
      };
    case UPDATE_SELECTED_EVENT_TYPES:
      return {
        ...state,
        selectedEventTypes: action.payload,
      };
    case UPDATE_FILTERED_EVENT_TYPES:
      return {
        ...state,
        filteredOptions: action.payload,
      };
    default:
      return state;
  }
};

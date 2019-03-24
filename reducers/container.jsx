import {
  CONTAINERS_RETRIEVED,
  CONTAINER_PROCESSES_RETRIEVED,
  CONTAINER_LOGS_RETRIEVED,
  CONTAINER_EVENTS_RETRIEVED,
  CONTAINER_DETAILS_RETRIEVED,
  CONTAINER_STATS_RETRIEVED,
  CONTAINER_SEARCH_STRING_CHANGED,
} from '../types/container.jsx';

const initState = {
  containers: {},
  processes: {},
  logs: '',
  events: [],
  details: {},
  stats: {},
  searchString: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case CONTAINERS_RETRIEVED:
      return {
        ...state,
        containers: action.payload,
      };
    case CONTAINER_PROCESSES_RETRIEVED:
      return {
        ...state,
        processes: action.payload,
      };
    case CONTAINER_LOGS_RETRIEVED:
      return {
        ...state,
        logs: action.payload,
      };
    case CONTAINER_EVENTS_RETRIEVED:
      state.events.push(action.payload);
      return {
        ...state,
        events: state.events,
      };
    case CONTAINER_DETAILS_RETRIEVED:
      return {
        ...state,
        details: action.payload,
      };
    case CONTAINER_STATS_RETRIEVED:
      return {
        ...state,
        stats: action.payload,
      };
    case CONTAINER_SEARCH_STRING_CHANGED:
      return {
        ...state,
        searchString: action.payload,
      };
    default:
      return state;
  }
};

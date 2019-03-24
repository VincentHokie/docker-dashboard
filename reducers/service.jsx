import {
  SERVICES_RETRIEVED,
  SERVICE_LOGS_RETRIEVED,
  SERVICE_EVENTS_RETRIEVED,
  SERVICE_DETAILS_RETRIEVED,
  SERVICE_STATS_RETRIEVED,
  SERVICE_SEARCH_STRING_CHANGED,
} from '../types/service.jsx';

const initState = {
  services: {},
  logs: '',
  events: [],
  details: {},
  stats: {},
  searchString: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case SERVICES_RETRIEVED:
      return {
        ...state,
        services: action.payload,
      };
    case SERVICE_LOGS_RETRIEVED:
      return {
        ...state,
        logs: action.payload,
      };
    case SERVICE_EVENTS_RETRIEVED:
      return {
        ...state,
        events: action.payload,
      };
    case SERVICE_DETAILS_RETRIEVED:
      return {
        ...state,
        details: action.payload,
      };
    case SERVICE_STATS_RETRIEVED:
      return {
        ...state,
        stats: action.payload,
      };
    case SERVICE_SEARCH_STRING_CHANGED:
      return {
        ...state,
        searchString: action.payload,
      };
    default:
      return state;
  }
};

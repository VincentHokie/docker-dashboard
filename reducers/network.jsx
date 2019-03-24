import {
  NETWORKS_RETRIEVED,
  NETWORK_EVENTS_RETRIEVED,
  NETWORK_DETAILS_RETRIEVED,
  NETWORK_STATS_RETRIEVED,
  NETWORK_SEARCH_STRING_CHANGED,
} from '../types/network.jsx';

const initState = {
  networks: {},
  events: [],
  details: {},
  stats: {},
  searchString: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case NETWORKS_RETRIEVED:
      return {
        ...state,
        networks: action.payload,
      };
    case NETWORK_EVENTS_RETRIEVED:
      return {
        ...state,
        events: action.payload,
      };
    case NETWORK_DETAILS_RETRIEVED:
      return {
        ...state,
        details: action.payload,
      };
    case NETWORK_STATS_RETRIEVED:
      return {
        ...state,
        stats: action.payload,
      };
    case NETWORK_SEARCH_STRING_CHANGED:
      return {
        ...state,
        searchString: action.payload,
      };
    default:
      return state;
  }
};

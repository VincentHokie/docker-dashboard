import {
  CONFIGS_RETRIEVED,
  CONFIG_EVENTS_RETRIEVED,
  CONFIG_DETAILS_RETRIEVED,
  CONFIG_STATS_RETRIEVED,
  CONFIG_SEARCH_STRING_CHANGED,
} from '../types/config.jsx';

const initState = {
  configs: {},
  events: [],
  details: {},
  stats: {},
  searchString: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case CONFIGS_RETRIEVED:
      return {
        ...state,
        configs: action.payload,
      };
    case CONFIG_EVENTS_RETRIEVED:
      return {
        ...state,
        events: action.payload,
      };
    case CONFIG_DETAILS_RETRIEVED:
      return {
        ...state,
        details: action.payload,
      };
    case CONFIG_STATS_RETRIEVED:
      return {
        ...state,
        stats: action.payload,
      };
    case CONFIG_SEARCH_STRING_CHANGED:
      return {
        ...state,
        searchString: action.payload,
      };
    default:
      return state;
  }
};

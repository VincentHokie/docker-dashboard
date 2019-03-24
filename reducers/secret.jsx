import {
  SECRETS_RETRIEVED,
  SECRET_EVENTS_RETRIEVED,
  SECRET_DETAILS_RETRIEVED,
  SECRET_STATS_RETRIEVED,
  SECRET_SEARCH_STRING_CHANGED,
} from '../types/secret.jsx';

const initState = {
  secrets: {},
  events: [],
  details: {},
  stats: {},
  searchString: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case SECRETS_RETRIEVED:
      return {
        ...state,
        secrets: action.payload,
      };
    case SECRET_EVENTS_RETRIEVED:
      return {
        ...state,
        events: action.payload,
      };
    case SECRET_DETAILS_RETRIEVED:
      return {
        ...state,
        details: action.payload,
      };
    case SECRET_STATS_RETRIEVED:
      return {
        ...state,
        stats: action.payload,
      };
    case SECRET_SEARCH_STRING_CHANGED:
      return {
        ...state,
        searchString: action.payload,
      };
    default:
      return state;
  }
};

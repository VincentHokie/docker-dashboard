import {
  SECRETS_RETRIEVED,
  SECRET_EVENTS_RETRIEVED,
  SECRET_DETAILS_RETRIEVED,
  SECRET_STATS_RETRIEVED,
} from '../types/secret.jsx';

const initState = {
  secrets: [],
  events: [],
  details: {},
  stats: {},
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
    default:
      return state;
  }
};

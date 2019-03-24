import {
  VOLUMES_RETRIEVED,
  VOLUME_EVENTS_RETRIEVED,
  VOLUME_DETAILS_RETRIEVED,
  VOLUME_STATS_RETRIEVED,
  VOLUME_SEARCH_STRING_CHANGED,
} from '../types/volume.jsx';

const initState = {
  volumes: {},
  events: [],
  details: {},
  stats: {},
  searchString: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case VOLUMES_RETRIEVED:
      return {
        ...state,
        volumes: action.payload,
      };
    case VOLUME_EVENTS_RETRIEVED:
      return {
        ...state,
        events: action.payload,
      };
    case VOLUME_DETAILS_RETRIEVED:
      return {
        ...state,
        details: action.payload,
      };
    case VOLUME_STATS_RETRIEVED:
      return {
        ...state,
        stats: action.payload,
      };
    case VOLUME_SEARCH_STRING_CHANGED:
      return {
        ...state,
        searchString: action.payload,
      };
    default:
      return state;
  }
};

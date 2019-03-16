import {
  IMAGES_RETRIEVED,
  IMAGE_EVENTS_RETRIEVED,
  IMAGE_DETAILS_RETRIEVED,
  IMAGE_STATS_RETRIEVED,
  IMAGE_HISTORY_RETRIEVED,
} from '../types/image.jsx';

const initState = {
  images: {},
  events: [],
  details: {},
  stats: {},
  imageHistory: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case IMAGES_RETRIEVED:
      return {
        ...state,
        images: action.payload,
      };
    case IMAGE_EVENTS_RETRIEVED:
      return {
        ...state,
        events: action.payload,
      };
    case IMAGE_DETAILS_RETRIEVED:
      return {
        ...state,
        details: action.payload,
      };
    case IMAGE_STATS_RETRIEVED:
      return {
        ...state,
        stats: action.payload,
      };
    case IMAGE_HISTORY_RETRIEVED:
      return {
        ...state,
        imageHistory: action.payload,
      };
    default:
      return state;
  }
};

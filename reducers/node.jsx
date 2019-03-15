import {
  NODES_RETRIEVED,
  NODE_EVENTS_RETRIEVED,
  NODE_DETAILS_RETRIEVED,
  NODE_STATS_RETRIEVED,
} from '../types/node.jsx';

const initState = {
  nodes: [],
  events: [],
  details: {},
  stats: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case NODES_RETRIEVED:
      return {
        ...state,
        nodes: action.payload,
      };
    case NODE_EVENTS_RETRIEVED:
      return {
        ...state,
        events: action.payload,
      };
    case NODE_DETAILS_RETRIEVED:
      return {
        ...state,
        details: action.payload,
      };
    case NODE_STATS_RETRIEVED:
      return {
        ...state,
        stats: action.payload,
      };
    default:
      return state;
  }
};

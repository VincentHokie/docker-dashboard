import {
  DOCKER_DAEMONS_RETRIEVED,
  DOCKER_DAEMON_EVENTS_RETRIEVED,
  DOCKER_DAEMON_DETAILS_RETRIEVED,
  DOCKER_DAEMON_STATS_RETRIEVED,
} from '../types/docker-daemon.jsx';

const initState = {
  daemons: [],
  events: [],
  details: {},
  stats: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case DOCKER_DAEMONS_RETRIEVED:
      return {
        ...state,
        daemons: action.payload,
      };
    case DOCKER_DAEMON_EVENTS_RETRIEVED:
      return {
        ...state,
        events: action.payload,
      };
    case DOCKER_DAEMON_DETAILS_RETRIEVED:
      return {
        ...state,
        details: action.payload,
      };
    case DOCKER_DAEMON_STATS_RETRIEVED:
      return {
        ...state,
        stats: action.payload,
      };
    default:
      return state;
  }
};

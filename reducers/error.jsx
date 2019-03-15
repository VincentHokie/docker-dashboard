import {
  ERROR_PAGE_CLEAR,
  ERROR_PAGE_DISPLAY,
} from '../types/error.jsx';

const initState = {
  errorCode: '',
  errorMessage: '',
  userMessage: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case ERROR_PAGE_DISPLAY:
      return {
        ...state,
        errorMessage: action.payload.statusText,
        errorCode: action.payload.status,
        userMessage: action.userMessage,
      };
    case ERROR_PAGE_CLEAR:
      return {
        ...state,
        errorMessage: '',
        errorCode: '',
        userMessage: '',
      };
    default:
      return state;
  }
};

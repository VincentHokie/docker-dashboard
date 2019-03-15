import { HIDE_NOTIFICATION } from '../types/notification.jsx';

const hideNotification = (event) => {
  event.preventDefault();
  return dispatch => (
    dispatch({
      type: HIDE_NOTIFICATION,
    })
  );
};

module.exports = {
  hideNotification,
};

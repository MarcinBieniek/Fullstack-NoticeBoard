import { API_URL } from '../config.js';
import shortid from 'shortid';

//selectors
export const getAllNotices = ({ notices }) => notices;

// actions
const createActionName = actionName => `app/notices/${actionName}`;
const UPDATE_NOTICES = createActionName('UPDATE_NOTICES');

// action creators
export const updateNotices = payload => ({ type: UPDATE_NOTICES, payload });

export const fetchNotices = () => {
  return (dispatch) => {
    fetch('http://localhost:8000/api/ads')
      .then(res => res.json())
      .then(notices => dispatch(updateNotices(notices)));
  }
};

const noticesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_NOTICES:
      return [...action.payload]
    default:
      return statePart;
  };
};

export default noticesReducer;
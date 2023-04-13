import shortid from 'shortid';

//selectors
export const getAllNotices = ({ notices }) => notices;
export const getNoticeById = ({ notices }, id) => notices.find((notice) => notice._id === id);

// actions
const createActionName = actionName => `app/notices/${actionName}`;
const UPDATE_NOTICES = createActionName('UPDATE_NOTICES');
const DELETE_NOTICES = createActionName('DELETE_NOTICES');
const ADD_NOTICES = createActionName('ADD_NOTICES');
const EDIT_NOTICES = createActionName('EDIT_NOTICES');

// action creators
export const updateNotices = payload => ({ type: UPDATE_NOTICES, payload });
export const deleteNotices = payload => ({ type: DELETE_NOTICES, payload });
export const addNotices = payload => ({ type: ADD_NOTICES, payload });
export const editNotices = payload => ({ type: EDIT_NOTICES, payload });

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
      return [...action.payload];
    case DELETE_NOTICES:
      return statePart.filter(notice => notice._id !== action.payload);
    case ADD_NOTICES:
      return [...statePart, {...action.payload, id: shortid() }];
    case EDIT_NOTICES:
      return statePart.map((notice) => (notice._id === action.payload.id ? { ...notice, ...action.payload } : notice));     
    default:
      return statePart;
  };
};

export default noticesReducer;
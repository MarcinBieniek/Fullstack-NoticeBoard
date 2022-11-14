//selectors
export const getAllNotices = ({ notices }) => notices;

// actions
const createActionName = actionName => `app/notices/${actionName}`;

// action creators
const noticesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default noticesReducer;
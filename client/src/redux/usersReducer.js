//selectors
export const getUser = ({ user }) => user;

// actions
const createActionName = (actionName) => `app/users/${actionName}`;
const LOG_IN = createActionName('LOG_IN');

// action creators
export const logIn = payload => ({
  type: LOG_IN, payload
})

const usersReducer = (statePart = null, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    default:
      return statePart;
  };
};

export default usersReducer;
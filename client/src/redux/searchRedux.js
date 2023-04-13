//selectors
export const searchInputValue = state => state.search;

//action name creator
const createActionName = actionName => `app/search/${actionName}`;

// action types
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// action creators
export const updateSearchString = payload => ({type: UPDATE_SEARCHSTRING, payload});

// reducer
const searchReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCHSTRING:
        return action.payload
      default:
        return statePart;
    }
}

export default searchReducer;
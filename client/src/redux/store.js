import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import usersReducer from './usersReducer';
import noticesReducer from './noticesReducer';
import searchReducer from './searchRedux';
import thunk from 'redux-thunk';

const subreducers = {
    user: usersReducer,
    notices: noticesReducer,
    search: searchReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk)
  )
);

export default store;
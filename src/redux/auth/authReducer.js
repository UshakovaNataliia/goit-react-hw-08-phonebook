import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    registerSuccess,
    registerError,
    logInSuccess,
    logInError,
    logOutSuccess,
    logOutError,
    getCurrentUserSuccess,
    clearError
} from './authActions';

const dataInitialState = {
  name: null,
  email: null,
};

const userDataReducer = createReducer(dataInitialState, {
  [registerSuccess]: (_, actions) => ({
    ...actions.payload.user,
  }),
  [logInSuccess]: (_, actions) => ({
    ...actions.payload.user,
  }),
  [logOutSuccess]: (_, __) => ({
    name: null,
    email: null,
  }),
  [getCurrentUserSuccess]: (_, actions) => ({
    ...actions.payload,
  }),
});

const tokenReducer = createReducer(null, {
  [registerSuccess]: (_, action) => action.payload.token,
  [logInSuccess]: (_, action) => action.payload.token,
  [logOutSuccess]: (_, __) => null,
});

const errorReducer = createReducer(null, {
  [logInError]: (_, action) => action.payload,
  [logOutError]: (_, action) => action.payload,
  [registerError]: (_, action) => action.payload,
  [logOutSuccess]: () => null,
  [logInSuccess]: () => null,
  [getCurrentUserSuccess]: () => null,
  [registerSuccess]: () => null,
  [clearError]: () => null,
});

export default combineReducers({
  user: userDataReducer,
  token: tokenReducer,
  error: errorReducer,
});
import axios from 'axios';
import {
    registerRequest,
    registerSuccess,
    registerError,
    logInRequest,
    logInSuccess,
    logInError,
    logOutRequest,
    logOutSuccess,
    logOutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError
} from './authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const clearToken = () => (axios.defaults.headers.common.Authorization = '');

export const register = items => dispatch => {
    dispatch(registerRequest());
    axios.post('/users/signup', items)
        .then(({ data }) => {
            dispatch(registerSuccess(data));
            setToken(data.token);
        })
        .catch(error => dispatch(registerError(error)))
};

export const logIn = user => dispatch => {
    dispatch(logInRequest());
    axios.post('/users/login', user)
    .then(({ data }) => {
        setToken(data.token);
        dispatch(logInSuccess(data));
    }).catch(error => dispatch(logInError(error)))
};

export const logOut = () => dispatch => {
    dispatch(logOutRequest());
    axios.post('/users/logout')
        .then(response => {
            clearToken();
            dispatch(logOutSuccess());
        })
        .catch(error => dispatch(logOutError(error)))
};

export const getUser = () => (dispatch, getState) => {
    const {auth: { token: localToken }} = getState();
    if (localToken === '') return;
    setToken(localToken);
    dispatch(getCurrentUserRequest());
    axios.get('/users/current')
        .then(({ data }) => {
            dispatch(getCurrentUserSuccess(data))
        })
        .catch(error => dispatch(getCurrentUserError(error)))
};
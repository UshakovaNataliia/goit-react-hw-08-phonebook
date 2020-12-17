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

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const clearToken = () => (axios.defaults.headers.common.Authorization = '');

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const register = items => dispatch => {
    dispatch(registerRequest());
    axios.post('/users/signup', items)
        .then(({ data }) => {
            // console.log(data);
            dispatch(registerSuccess(data));
            setToken(data.token);
        })
        .catch(error => dispatch(registerError(error)))
};

export const logIn = user => dispatch => {
    dispatch(logInRequest());
    axios.post('/users/login', user)
    .then(({ data }) => {
        dispatch(logInSuccess(data))
        setToken(data.token);
    }).catch(error => dispatch(logInError(error)))
};

export const logOut = () => dispatch => {
    dispatch(logOutRequest());
    axios.post('/users/logout')
        .then(({ data }) => {
            clearToken();
            dispatch(logOutSuccess());
        })
        .catch(error => dispatch(logOutError(error)))
};

export const getUser = () => (dispatch, getState) => {
    const {
        auth: { token: localToken },
    } = getState();
    if (localToken === '') return;
    setToken(localToken);
    dispatch(getCurrentUserRequest());
    axios.get('/users/current')
        .then(({ data }) => {
            dispatch(getCurrentUserSuccess(data))
        })
        .catch(error => dispatch(getCurrentUserError(error)))
};
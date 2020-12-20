import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    setContactsRequest,
    setContactsSuccess,
    setContactsError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError
} from './contactListActions';

export const addContactItem = contact => dispatch => {
    dispatch(addContactRequest());
    axios.post('/contacts', { ...contact })
        .then(({data}) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

export const setContacts = () => dispatch => {
    dispatch(setContactsRequest());
    axios.get('/contacts')
        .then(({ data }) => dispatch(setContactsSuccess(data)))
        .catch(error => dispatch(setContactsError(error)))
};

export const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());
    axios.delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)))
};
import {createAction} from '@reduxjs/toolkit';

export const addContactRequest = createAction('contact/addRequest');
export const addContactSuccess = createAction('contact/addSuccess');
export const addContactError = createAction('contact/addError');

export const deleteContactRequest = createAction('contact/deleteRequest');
export const deleteContactSuccess = createAction('contact/deleteSuccess');
export const deleteContactError = createAction('contact/deleteError');

export const setContactsRequest = createAction('contact/setRequest'); 
export const setContactsSuccess = createAction('contact/setSuccess'); 
export const setContactsError = createAction('contact/setError'); 
import { addContactSuccess, deleteContactSuccess, setContactsSuccess } from './contactListActions';
import { logOutSuccess } from '../auth/authActions';
import {createReducer} from '@reduxjs/toolkit';

export const contacts = createReducer([], {
    [addContactSuccess]: (state, action) => [...state, action.payload],
    [deleteContactSuccess]: (state, action) => state.filter(contact => contact.id !== action.payload),
    [setContactsSuccess]: (state, action) => [...state, ...action.payload],
    [logOutSuccess]: () => [],
});
import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import {contacts} from './contactList/contactListReducer';
import {filter} from './filter/filterReducer'

const contactsReducer = combineReducers({
        contacts,
        filter,
});

const DefaultMiddleware = getDefaultMiddleware();
const store = configureStore({
    reducer: {
       contactsReducer: contactsReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: [...DefaultMiddleware],
})
export default store;
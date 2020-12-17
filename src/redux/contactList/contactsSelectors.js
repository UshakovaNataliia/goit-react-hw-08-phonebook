import {createSelector} from '@reduxjs/toolkit';

export const getContacts = state => state.contactsReducer.contacts;
export const getFilter = state => state.contactsReducer.filter;

export const getFilteredContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        const loFilter = filter.toLowerCase();
        const filteredContact = contacts.filter(contact => contact.name.toLowerCase().includes(loFilter))
        return filteredContact
    },
);
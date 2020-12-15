import { filterInput } from './filterActions';
import { createReducer } from '@reduxjs/toolkit';

export const filter = createReducer('', {
    [filterInput]: (_, action) => action.payload, // _ - state не используется
});
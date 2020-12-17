import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import {contacts} from './contactList/contactListReducer';
import {filter} from './filter/filterReducer'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';

const contactsReducer = combineReducers({
        contacts,
        filter,
});

// const DefaultMiddleware = getDefaultMiddleware();

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
    reducer: {
        contactsReducer: contactsReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
export default store;
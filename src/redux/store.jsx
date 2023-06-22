import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import contactsReducer from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
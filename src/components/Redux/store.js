import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const ctore = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

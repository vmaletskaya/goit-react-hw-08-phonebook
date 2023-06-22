import * as API from './operations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'Contacts',
  initialState,
  extraReducers: {
    [API.fetchAll.pending]: handlePending,
    [API.addContact.pending]: handlePending,
    [API.deleteContact.pending]: handlePending,
    [API.fetchAll.rejected]: handleRejected,
    [API.addContact.rejected]: handleRejected,
    [API.deleteContact.rejected]: handleRejected,
    [API.fetchAll.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [API.addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [API.deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

export default contactsSlice.reducer;
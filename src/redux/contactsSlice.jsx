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
  extraReducers: builder => {
    builder
      .addCase(API.fetchAll.pending, handlePending)
      .addCase(API.addContact.pending, handlePending)
      .addCase(API.deleteContact.pending, handlePending)
      .addCase(API.fetchAll.rejected, handleRejected)
      .addCase(API.addContact.rejected, handleRejected)
      .addCase(API.deleteContact.rejected, handleRejected)
      .addCase(API.fetchAll.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(API.addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(API.deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(contact => contact.id === action.payload.id);
        state.items.splice(index, 1);
      });
  },
});

export default contactsSlice.reducer;
const { createSlice } = require("@reduxjs/toolkit");

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return state = action.payload;
    },
  },
});

export const {setFilter} = filterSlice.actions
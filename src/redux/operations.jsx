import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL =
  'https://648ef05575a96b6644447e7d.mockapi.io/Contacts/';

export const fetchAll = createAsyncThunk(
  'tasks/fetchAll',

  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async (obj, { rejectWithValue }) => {
    try {
      const response = await axios.post(baseURL, obj);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${baseURL}/${id}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
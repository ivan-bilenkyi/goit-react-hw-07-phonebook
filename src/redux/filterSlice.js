import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    status: '',
  },
  reducers: {
    setFilter(state, { payload }) {
      state.status = payload;
    },
  },
});

export const getFilter = state => state.filter.filter;

export const { setFilter } = filterSlice.actions;

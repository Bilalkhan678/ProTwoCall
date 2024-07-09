// currentPageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 'home', // Default value as per your application
};

const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
      localStorage.setItem('currentPage', action.payload);
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;

export default currentPageSlice.reducer;

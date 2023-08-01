import { configureStore } from '@reduxjs/toolkit'
import HomeSlice from '../../src/Store/HomeSlice.js';
export const Store = configureStore({
  reducer: {
    home: HomeSlice

  },
});


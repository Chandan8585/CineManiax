import { configureStore } from '@reduxjs/toolkit'
import HomeSlice from "./HomeSlice.js";
export const Store = configureStore({
  reducer: {
    home: HomeSlice

  },
});


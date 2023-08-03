import { configureStore } from '@reduxjs/toolkit'
import HomeReducer from "./HomeSlice.js";
export const Store = configureStore({
  reducer: {
    home: HomeReducer

  },
});


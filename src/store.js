import { configureStore } from "@reduxjs/toolkit";
import platformReducer from './component/features/platformSlice'

export const store = configureStore({
  reducer: {
    platform : platformReducer,
  },
});
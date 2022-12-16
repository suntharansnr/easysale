import { configureStore } from '@reduxjs/toolkit';
import clickSlice from './slices/clickSlice';


export const store = configureStore({
  reducer: {
    clicks: clickSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
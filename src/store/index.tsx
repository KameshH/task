import { configureStore } from '@reduxjs/toolkit';
import competitionsReducer from './competitions';

export const store = configureStore({
  reducer: {
    competitions: competitionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

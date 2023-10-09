import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/auth.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

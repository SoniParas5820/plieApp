import { configureStore } from '@reduxjs/toolkit';
import { coreApi } from '../services/coreApi';
import authReducer from '../slices/authSlice';
import favoritesReducer from '../slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer,
    [coreApi.reducerPath]: coreApi.reducer,
  },
  middleware: getDefault =>
    getDefault().concat(
      coreApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

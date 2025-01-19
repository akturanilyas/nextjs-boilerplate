import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import { baseApi } from '@/api/base/baseApi';
import { loadingSlice } from '@/states/slices/loadingSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { mainSlice } from '@/states/slices/mainSlice';
import storage from '@/utils/localStorage';

const persistConfig = {
  key: 'app',
  version: 1,
  storage,
  whitelist: ['main'],
};

const baseReducers = combineReducers({
  main: mainSlice.reducer,
  loading: loadingSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, baseReducers);

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware),
  });

  setupListeners(store.dispatch);

  return store;
};

// Infer the return type of `makeStore`
export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];

export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;

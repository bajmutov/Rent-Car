import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/carsSlice';
import { filtersReducer } from './Filters/filtersSlice';
import { favouriteReducer } from './Filters/filtersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfigCars = {
  key: 'favorites',
  storage,
  whitelist: ['favoritesCars'],
};

export const store = configureStore({
  reducer: {
    auth: carsReducer,
    filter: filtersReducer,
    favourite: persistReducer(persistConfigCars, favouriteReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

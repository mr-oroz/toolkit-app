import { configureStore } from '@reduxjs/toolkit'
import { api } from './rtk-query/settings';
import { rootReducer } from './root-reducer';

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(api.middleware),
  })
}

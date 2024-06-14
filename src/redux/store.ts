import { configureStore } from '@reduxjs/toolkit';

import converterReducer from './slices/converterSlice.ts';
import currencyReducer from './slices/currencySlice.ts';
import themeReducer from './slices/themeSlice.ts';
import windowReducer from './slices/windowSlice.ts';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    currency: currencyReducer,
    window: windowReducer,
    converter: converterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

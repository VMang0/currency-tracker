import { configureStore } from '@reduxjs/toolkit';

import banksReducer from '@redux/slices/banksSlice';
import converterReducer from '@redux/slices/converterSlice';
import currencyReducer from '@redux/slices/currencySlice';
import themeReducer from '@redux/slices/themeSlice';
import timelineReducer from '@redux/slices/timelineSlice';
import windowReducer from '@redux/slices/windowSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    currency: currencyReducer,
    window: windowReducer,
    converter: converterReducer,
    banks: banksReducer,
    timeline: timelineReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = (dispatch: AppDispatch) => void;

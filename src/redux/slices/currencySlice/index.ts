import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RejectedResponse } from '@redux/slices/converterSlice/types';
import { getCurrency } from '@redux/slices/currencySlice/thunks';
import { CurrencySliceInitialStateType } from '@redux/slices/currencySlice/types';
import { CurrencyResponseType } from '@type/currency';

const initialState: CurrencySliceInitialStateType = {
  isLoading: false,
  latestCurrencies: {},
  currencies: {},
  lastUpdatedDate: '',
};

const updateStateAndLocalStorage = (state: CurrencySliceInitialStateType, payload: CurrencyResponseType) => {
  const { latestCurrencies, currencies } = payload;
  const { meta, data } = latestCurrencies;
  state.isLoading = false;
  state.latestCurrencies = data;
  state.currencies = currencies;
  state.lastUpdatedDate = meta.last_updated_at;
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencies: (state: CurrencySliceInitialStateType, action: PayloadAction<CurrencyResponseType>) => {
      const { currencies, latestCurrencies } = action.payload;
      const { meta, data } = latestCurrencies;
      state.currencies = currencies;
      state.latestCurrencies = data;
      state.lastUpdatedDate = meta.last_updated_at;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getCurrency.fulfilled,
        (state: CurrencySliceInitialStateType, action: PayloadAction<CurrencyResponseType | null>) => {
          if (action.payload) {
            updateStateAndLocalStorage(state, action.payload);
          }
        },
      )
      .addCase(getCurrency.pending, (state: CurrencySliceInitialStateType) => {
        state.isLoading = true;
      })
      .addCase(
        getCurrency.rejected,
        (state: CurrencySliceInitialStateType, action: PayloadAction<RejectedResponse | undefined>) => {
          if (action?.payload) {
            updateStateAndLocalStorage(state, action.payload as CurrencyResponseType);
          }
        },
      );
  },
});

export const { setCurrencies } = currencySlice.actions;
export default currencySlice.reducer;

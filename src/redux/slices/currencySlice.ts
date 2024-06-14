import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

import { fulfilled, pending, rejected } from '@redux/actions/currency';

type CurrencyType = {
  isLoading: boolean;
  latestCurrencies: object | null;
  currencies: object | null;
};

const initialState: CurrencyType = {
  isLoading: false,
  latestCurrencies: [],
  currencies: [],
};

const currencySlice = createSlice<CurrencyType, SliceCaseReducers<CurrencyType>>({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fulfilled, (state, action) => {
        const { latestCurrencies, currencies } = action.payload;
        state.isLoading = false;
        state.latestCurrencies = latestCurrencies;
        state.currencies = currencies;
      })
      .addCase(pending, (state) => {
        state.isLoading = true;
      })
      .addCase(rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const latestCurrenciesSelector = (state) => state.currency.latestCurrencies;
export const currenciesSelector = (state) => state.currency.currencies;
export const isLoadingSelector = (state) => state.currency.isLoading;

export default currencySlice.reducer;

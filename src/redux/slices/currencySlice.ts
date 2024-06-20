import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

import { fulfilled, pending, rejected } from '@redux/actions/currency';
import { CurrenciesType, LatestCurrenciesType } from '@types/currency';

type CurrencyType = {
  isLoading: boolean;
  latestCurrencies: LatestCurrenciesType | null;
  currencies: CurrenciesType | null;
  lastUpdatedDate: string;
};

const initialState: CurrencyType = {
  isLoading: false,
  latestCurrencies: [],
  currencies: [],
  lastUpdatedDate: '',
};

const currencySlice = createSlice<CurrencyType, SliceCaseReducers<CurrencyType>>({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencies: (state, action) => {
      const { currencies, latestCurrencies } = action.payload;
      const { meta, data } = latestCurrencies;
      state.currencies = currencies;
      state.latestCurrencies = data;
      state.lastUpdatedDate = meta.last_updated_at;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fulfilled, (state, action) => {
        const { latestCurrencies, currencies } = action.payload;
        const { meta, data } = latestCurrencies;
        state.isLoading = false;
        state.latestCurrencies = data;
        state.currencies = currencies;
        state.lastUpdatedDate = meta.last_updated_at;

        localStorage.setItem('currencies', JSON.stringify({ currencies, latestCurrencies }));
        localStorage.setItem('lastUpdated', new Date().toString());
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
export const lastUpdatedDateSelector = (state) => state.currency.lastUpdatedDate;
export const isLoadingSelector = (state) => state.currency.isLoading;

export const { setCurrencies } = currencySlice.actions;
export default currencySlice.reducer;

import { RootState } from '@redux/store';

export const latestCurrenciesSelector = (state: RootState) => state.currency.latestCurrencies;
export const currenciesSelector = (state: RootState) => state.currency.currencies;
export const lastUpdatedDateSelector = (state: RootState) => state.currency.lastUpdatedDate;
export const isCurrenciesLoadingSelector = (state: RootState) => state.currency.isLoading;

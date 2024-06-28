import { CurrenciesType, LatestCurrencyType } from '@types/currency';

export type CurrencySliceInitialStateType = {
  isLoading: boolean;
  latestCurrencies: Record<string, LatestCurrencyType> | [];
  currencies: CurrenciesType | [];
  lastUpdatedDate: string;
};

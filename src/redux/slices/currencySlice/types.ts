import { CurrenciesType, LatestCurrencyType } from '@type/currency';

export type CurrencySliceInitialStateType = {
  isLoading: boolean;
  latestCurrencies: Record<string, LatestCurrencyType>;
  currencies: CurrenciesType;
  lastUpdatedDate: string;
};

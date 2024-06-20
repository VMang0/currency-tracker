export type CurrencyType = {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
  type: string;
  countries: string[];
};

export type LatestCurrencyType = {
  code: string;
  value: number;
};

export type CurrenciesType = CurrencyType[];

export type LatestCurrenciesType = {
  meta: {
    last_updated_at: string;
  };
  data: LatestCurrencyType[];
};

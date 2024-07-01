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

export type CurrenciesType = Record<string, CurrencyType>;

export type LatestCurrenciesType = {
  meta: { last_updated_at: string };
  data: Record<string, LatestCurrencyType>;
};

export type CurrencyHistoryType = {
  rate_close: number;
  rate_high: number;
  rate_low: number;
  rate_open: number;
  time_close: string;
  time_open: string;
  time_period_end: string;
  time_period_start: string;
};

export type CurrencyResponseType = {
  latestCurrencies: LatestCurrenciesType;
  currencies: CurrenciesType;
};

export type CurrencyDataType = {
  value: string;
  label: string;
};

import { LatestCurrencyType } from '@type/currency';

export const getCurrencyValueToUSD = (
  code: string,
  latestCurrencies: Record<string, LatestCurrencyType>,
): number | undefined => {
  const findCurrency = Object.keys(latestCurrencies).find((item) => item === code);
  return findCurrency ? +latestCurrencies[findCurrency]?.value.toFixed(2) : undefined;
};

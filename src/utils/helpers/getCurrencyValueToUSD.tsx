import { LatestCurrencyType } from '@types/currency';

export const getCurrencyValueToUSD = (
  code: string,
  latestCurrencies: Record<string, LatestCurrencyType> | [],
): number => {
  const findCurrency = Object.keys(latestCurrencies).find((item) => item === code);
  return latestCurrencies[findCurrency]?.value?.toFixed(2);
};

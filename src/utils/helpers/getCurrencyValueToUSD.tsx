import { useSelector } from 'react-redux';

import { latestCurrenciesSelector } from '@redux/slices/currencySlice';

export const getCurrencyValueToUSD = (code: string): number => {
  const latestCurrencies = useSelector(latestCurrenciesSelector);
  const findCurrency = Object.keys(latestCurrencies).find((item) => item === code);
  return latestCurrencies[findCurrency]?.value?.toFixed(2);
};

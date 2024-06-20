import { useSelector } from 'react-redux';

import { currenciesSelector } from '@redux/slices/currencySlice';

export const convertDataCurrency = (value: string) => {
  const currencies = useSelector(currenciesSelector);
  return { value, label: `${value} - ${currencies[value].name_plural || 'unknown'}` };
};

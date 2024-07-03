import { CurrenciesType } from '@type/currency';

export const convertDataCurrency = (value: string, currencies: CurrenciesType) => {
  return { value, label: `${value} - ${currencies[value]?.name_plural || 'unknown'}` };
};

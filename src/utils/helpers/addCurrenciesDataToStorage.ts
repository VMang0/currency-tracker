import { CurrencyResponseType } from '@type/currency';

export const addCurrenciesDataToStorage = (data: CurrencyResponseType) => {
  localStorage.setItem('currencies', JSON.stringify(data));
  localStorage.setItem('lastUpdated', new Date().toString());
};

import { CurrencyResponseType } from '@type/currency';

export const getCachedCurrencies = (): CurrencyResponseType | undefined => {
  const lastUpdated = localStorage.getItem('lastUpdated');
  const now = new Date();

  if (lastUpdated) {
    const lastUpdatedDate = new Date(lastUpdated);
    const diffHours = (now.getTime() - lastUpdatedDate.getTime()) / (1000 * 60 * 60);

    if (diffHours < 1) {
      const cachedCurrencies = localStorage.getItem('currencies');
      if (cachedCurrencies) return JSON.parse(cachedCurrencies) as CurrencyResponseType;
    }
  }

  return undefined;
};

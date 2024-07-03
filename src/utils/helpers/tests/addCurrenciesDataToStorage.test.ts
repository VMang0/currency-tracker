import { CurrencyResponseType } from '@type/currency';
import { addCurrenciesDataToStorage } from '@utils/helpers/addCurrenciesDataToStorage';

describe('addCurrenciesDataToStorage', () => {
  const mockData: CurrencyResponseType = {
    latestCurrencies: {
      meta: { last_updated_at: '2024-07-02T12:00:00Z' },
      data: {
        ARS: {
          code: 'ARS',
          value: 905.1666639555,
        },
        AUD: {
          code: 'AUD',
          value: 1.5053502208,
        },
        BTC: {
          code: 'BTC',
          value: 0.0000154971,
        },
      },
    },
    currencies: {
      ARS: {
        symbol: 'AR$',
        name: 'Argentine Peso',
        symbol_native: '$',
        decimal_digits: 2,
        rounding: 0,
        code: 'ARS',
        name_plural: 'Argentine pesos',
        type: 'fiat',
        countries: ['AR'],
      },
      AUD: {
        symbol: 'AU$',
        name: 'Australian Dollar',
        symbol_native: '$',
        decimal_digits: 2,
        rounding: 0,
        code: 'AUD',
        name_plural: 'Australian dollars',
        type: 'fiat',
        countries: ['AU', 'CC', 'CX', 'HM', 'KI', 'NF', 'NR', 'TV'],
      },
    },
  };

  beforeEach(() => {
    localStorage.clear();
  });

  it('should save currencies data to localStorage', () => {
    addCurrenciesDataToStorage(mockData);
    expect(localStorage.setItem).toHaveBeenCalledWith('currencies', JSON.stringify(mockData));
  });

  it('should save the current date as lastUpdated to localStorage', () => {
    const beforeDate = new Date().toString();
    addCurrenciesDataToStorage(mockData);
    const afterDate = new Date().toString();

    const lastUpdated = localStorage.getItem('lastUpdated');
    expect(lastUpdated).not.toBeNull();

    expect(new Date(lastUpdated!) >= new Date(beforeDate)).toBe(true);
    expect(new Date(lastUpdated!) <= new Date(afterDate)).toBe(true);
  });
});

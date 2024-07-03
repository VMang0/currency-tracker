import { CurrenciesType } from '@type/currency';
import { convertDataCurrency } from '@utils/helpers/convertDataCurrency';

describe('convertDataCurrency', () => {
  it('should convert currency data correctly', () => {
    const currencies: CurrenciesType = {
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
    };

    const value = 'ARS';
    const result = convertDataCurrency(value, currencies);

    expect(result).toEqual({ value, label: 'ARS - Argentine Peso' });
  });

  it('should return "unknown" if currency is not in the list', () => {
    const currencies: CurrenciesType = {
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
    };

    const value = 'GBP';
    const result = convertDataCurrency(value, currencies);

    expect(result).toEqual({ value, label: 'GBP - unknown' });
  });
});

import { currencyData } from '@constants/currency';
import { addCurrenciesToBanks, getRandomCurrencies, getRandomInt } from '@utils/helpers/addCurrenciesToBanks';

describe('getRandomInt', () => {
  it('should return a random integer between min and max', () => {
    const min = 1;
    const max = 10;
    const randomInt = getRandomInt(min, max);

    expect(randomInt).toBeGreaterThanOrEqual(min);
    expect(randomInt).toBeLessThanOrEqual(max);
  });

  it('should return min when min and max are the same', () => {
    const min = 5;
    const max = 5;
    const randomInt = getRandomInt(min, max);

    expect(randomInt).toBe(min);
  });
});

describe('getRandomCurrencies', () => {
  it('should return the requested number of random currencies', () => {
    const values = ['USD', 'EUR', 'GBP', 'JPY', 'AUD'];
    const count = 3;
    const randomCurrencies = getRandomCurrencies(values, count);

    expect(randomCurrencies).toHaveLength(count);
    randomCurrencies.forEach((currency) => {
      expect(values).toContain(currency);
    });
  });

  it('should not contain duplicate currencies', () => {
    const values = ['USD', 'EUR', 'GBP', 'JPY', 'AUD'];
    const count = values.length;
    const randomCurrencies = getRandomCurrencies(values, count);

    const uniqueCurrencies = new Set(randomCurrencies);
    expect(uniqueCurrencies.size).toBe(randomCurrencies.length);
  });
});

describe('addCurrenciesToBanks', () => {
  it('should return an array of random currencies from currencyData', () => {
    const result = addCurrenciesToBanks();

    expect(result.length).toBeGreaterThanOrEqual(2);
    expect(result.length).toBeLessThanOrEqual(currencyData.length - 1);
    result.forEach((currency) => {
      expect(currencyData.map((c) => c.value)).toContain(currency);
    });
  });
});

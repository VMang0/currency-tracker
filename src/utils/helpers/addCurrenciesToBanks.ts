import { currencyData } from '@constants/currency';

export const getRandomCurrencies = (values: string[], count: number) => {
  const selectedCurrencies = [];
  const usedIndices = new Set();

  while (selectedCurrencies.length < count) {
    const randomIndex = Math.floor(Math.random() * values.length);
    if (!usedIndices.has(randomIndex)) {
      selectedCurrencies.push(values[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  return selectedCurrencies;
};

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const addCurrenciesToBanks = (): string[] => {
  const values: string[] = currencyData.map((currency) => currency.value);
  const randomCount = getRandomInt(2, values.length - 1);
  return getRandomCurrencies(values, randomCount);
};

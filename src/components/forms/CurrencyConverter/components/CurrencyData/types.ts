import { ChangeEvent } from 'react';

export type CurrencyDataProps = {
  currency: string;
  destinationCurrency: string;
  value: number;
  ratio: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

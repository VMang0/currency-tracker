import { ReactNode } from 'react';

export type StaticDataType = {
  name: string;
  symbol_native: ReactNode;
  value: string;
};
export type DynamicDataType = {
  name: string;
  symbol_native: ReactNode;
  code: string;
  countries: string[];
  decimal_digits: number;
  name_plural: string;
  rounding: number;
  symbol: string;
  type: string;
};

export type CardDataType = StaticDataType | DynamicDataType;

export type CurrencyCardPropsType = {
  cardData: CardDataType;
  isDynamicCard?: boolean;
};

export type CurrencyCardWrapperType = {
  isDynamicCard: boolean;
};

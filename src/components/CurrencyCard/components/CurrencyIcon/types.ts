import { ReactNode } from 'react';

import { currencyColors } from '@constants/card';

export type CurrencyIconPropsType = {
  icon: string | ReactNode;
};

export type ColorLiteralType = (typeof currencyColors)[number];

export type CurrencyIconWrapperType = {
  bgColor: ColorLiteralType;
};

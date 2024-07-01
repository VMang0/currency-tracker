import { FC } from 'react';

import { CurrencyIconWrapper } from '@components/CurrencyCard/components/CurrencyIcon/styled';
import { ColorLiteralType, CurrencyIconPropsType } from '@components/CurrencyCard/components/CurrencyIcon/types';
import { currencyColors } from '@constants/card';

export const CurrencyIcon: FC<CurrencyIconPropsType> = ({ icon }) => {
  const generateColor = (): ColorLiteralType => {
    const colorIndex = Math.floor(Math.random() * currencyColors.length);
    return currencyColors[colorIndex];
  };
  const bgColor: ColorLiteralType = generateColor();

  return <CurrencyIconWrapper bgColor={bgColor}>{icon}</CurrencyIconWrapper>;
};

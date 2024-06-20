import { FC } from 'react';

import { CurrencyIconStyled } from '@components/CurrencyCard/CurrencyIcon/styled';
import { currencyColors } from '@constants/card.tsx';

type CurrencyIconPropsType = {
  icon: string;
};

export const CurrencyIcon: FC<CurrencyIconPropsType> = ({ icon }) => {
  const generateColor = () => {
    const colorIndex = Math.floor(Math.random() * currencyColors.length);
    return currencyColors[colorIndex];
  };
  const cardBgColor = generateColor();

  return <CurrencyIconStyled $bgColor={cardBgColor}>{icon}</CurrencyIconStyled>;
};

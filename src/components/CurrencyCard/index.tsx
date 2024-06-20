import { FC, memo } from 'react';
import { useDispatch } from 'react-redux';

import { CurrencyIcon } from '@components/CurrencyCard/CurrencyIcon';
import { CardData, CurrencyCardStyled } from '@components/CurrencyCard/styled';
import { setCurrencyFrom } from '@redux/slices/converterSlice';
import { openModal } from '@redux/slices/windowSlice';
import { AppDispatch } from '@redux/store';
import { Text } from '@styled/components/typography ';
import { getCurrencyValueToUSD } from '@utils/helpers/getCurrencyValueToUSD';

type CardDataType = {
  name: string;
  value: string;
};

type CurrencyCardPropsType = {
  cardData: CardDataType[];
  isDynamicCard?: boolean;
};

export const CurrencyCard: FC<CurrencyCardPropsType> = memo(({ cardData, isDynamicCard = true }) => {
  const dispatch = useDispatch<AppDispatch>();
  const value = isDynamicCard && getCurrencyValueToUSD(cardData.code);

  const onOpenModal = (event) => {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
      dispatch(setCurrencyFrom(cardData.code));
      dispatch(openModal());
    }
  };

  return (
    <CurrencyCardStyled
      onClick={isDynamicCard ? onOpenModal : undefined}
      tabIndex={0}
      onKeyDown={isDynamicCard ? onOpenModal : undefined}
      $isDynamicCard={isDynamicCard}
    >
      <CurrencyIcon icon={cardData.symbol_native} />
      <CardData>
        <Text size="l" color="600" $lineHeight="s" $isLeftAlign>
          {cardData.name}
        </Text>
        <Text size="m" color="500" $lineHeight="s" $isLeftAlign>
          {isDynamicCard ? `R$ ${value}` : cardData.value}
        </Text>
      </CardData>
    </CurrencyCardStyled>
  );
});

CurrencyCard.displayName = 'CurrencyCard';

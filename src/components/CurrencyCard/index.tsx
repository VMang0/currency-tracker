import { FC, memo, MouseEvent, KeyboardEvent, KeyboardEventHandler, MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';

import { CurrencyIcon } from '@components/CurrencyCard/components/CurrencyIcon';
import { CardData, CurrencyCardWrapper } from '@components/CurrencyCard/styled';
import { CurrencyCardPropsType, DynamicDataType, StaticDataType } from '@components/CurrencyCard/types';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { setCurrencyFrom } from '@redux/slices/converterSlice';
import { latestCurrenciesSelector } from '@redux/slices/currencySlice/selectors';
import { openModal } from '@redux/slices/windowSlice';
import { Text } from '@styled/components/typography/styled';
import { getCurrencyValueToUSD } from '@utils/helpers/getCurrencyValueToUSD';

export const CurrencyCard: FC<CurrencyCardPropsType> = memo(({ cardData, isDynamicCard = true }) => {
  const dispatch = useAppDispatch();
  const latestCurrencies = useSelector(latestCurrenciesSelector);
  const value = isDynamicCard
    ? `R$ ${getCurrencyValueToUSD((cardData as DynamicDataType).code, latestCurrencies)}`
    : (cardData as StaticDataType).value;

  const onOpenModal = (event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
    if (event.type === 'click' || (event.type === 'keydown' && (event as KeyboardEvent).key === 'Enter')) {
      dispatch(setCurrencyFrom((cardData as DynamicDataType).code));
      dispatch(openModal());
    }
  };

  return (
    <CurrencyCardWrapper
      tabIndex={0}
      isDynamicCard={isDynamicCard}
      data-test-id={`card-item-${cardData.name}`}
      onClick={isDynamicCard ? (onOpenModal as MouseEventHandler<HTMLDivElement>) : undefined}
      onKeyDown={isDynamicCard ? (onOpenModal as KeyboardEventHandler<HTMLDivElement>) : undefined}
    >
      <CurrencyIcon icon={cardData.symbol_native} />
      <CardData>
        <Text size="l" color={600} lineHeight="s" isLeftAlign>
          {cardData.name}
        </Text>
        <Text size="m" color={500} lineHeight="s" isLeftAlign>
          {value}
        </Text>
      </CardData>
    </CurrencyCardWrapper>
  );
});

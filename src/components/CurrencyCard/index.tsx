import { CurrencyIcon } from '@components/CurrencyCard/CurrencyIcon';
import { CardData, CurrencyCardStyled } from '@components/CurrencyCard/styled';
import { Text } from '@styled/components/typography ';
import { getCurrencyValueToUSD } from '@utils/getCurrencyValueToUSD';

export const CurrencyCard = ({ currency }) => {
  const value = getCurrencyValueToUSD(currency.code);

  return (
    <CurrencyCardStyled>
      <CurrencyIcon currencyIcon={currency.symbol_native} />
      <CardData>
        <Text size="l" color="secondary" $lineHeight="s" $isLeftAlign>
          {currency.name}
        </Text>
        <Text size="m" color="percent" $lineHeight="s" $isLeftAlign>
          {value}
        </Text>
      </CardData>
    </CurrencyCardStyled>
  );
};

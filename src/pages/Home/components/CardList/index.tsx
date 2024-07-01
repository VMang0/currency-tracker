import { useSelector } from 'react-redux';

import { CurrencyCard } from '@components/CurrencyCard';
import { CardListWrapper } from '@pages/Home/components/CardList/styled';
import { currenciesSelector } from '@redux/slices/currencySlice/selectors';

export const CurrencyCardList = () => {
  const currencies = useSelector(currenciesSelector);
  const currenciesWithoutUSD = Object.keys(currencies)?.filter((value) => value !== 'USD');

  return (
    <CardListWrapper>
      {currenciesWithoutUSD &&
        currenciesWithoutUSD.map((item) => (
          <CurrencyCard key={item} cardData={currencies[item as keyof typeof currencies]} />
        ))}
    </CardListWrapper>
  );
};

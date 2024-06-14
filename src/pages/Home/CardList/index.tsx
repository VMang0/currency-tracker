import { useSelector } from 'react-redux';

import { CurrencyCard } from '@components/CurrencyCard';
import { CardListWrapper } from '@pages/Home/CardList/styled';
import { currenciesSelector } from '@redux/slices/currencySlice';

export const CurrencyCardList = () => {
  const currencies = useSelector(currenciesSelector);
  const currenciesWithoutUSD = Object.keys(currencies)?.filter((value) => value !== 'USD');
  return (
    <CardListWrapper>
      {currenciesWithoutUSD &&
        currenciesWithoutUSD.map((item) => <CurrencyCard key={item} currency={currencies[item]} />)}
    </CardListWrapper>
  );
};

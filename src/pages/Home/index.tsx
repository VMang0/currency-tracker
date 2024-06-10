// noinspection TypeScriptValidateTypes

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CurrencyCard } from '@components/CurrencyCard';
import { Loader } from '@components/Loader';
import { CardListWrapper, SectionName } from '@pages/Home/styled';
import { getCurrency } from '@redux/actions/currency';
import { currenciesSelector, isLoadingSelector } from '@redux/slices/currencySlice';
import { AppDispatch } from '@redux/store';
import { FlexColumn } from '@styled/components/layout';

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currencies = useSelector(currenciesSelector);
  const isLoading = useSelector(isLoadingSelector);

  const getCurrencies = async () => {
    try {
      await dispatch(getCurrency());
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    if (!currencies) {
      getCurrencies();
    }
  }, []);

  return (
    <FlexColumn $gap="l">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <SectionName>Quotes</SectionName>
          <CardListWrapper>
            {currencies &&
              Object.keys(currencies).map((item) => <CurrencyCard key={item} currency={currencies[item]} />)}
          </CardListWrapper>
        </>
      )}
    </FlexColumn>
  );
};

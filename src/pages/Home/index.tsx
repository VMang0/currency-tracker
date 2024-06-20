import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CurrencyCard } from '@components/CurrencyCard';
import { CurrencyModal } from '@components/CurrencyModal';
import { Loader } from '@components/Loader';
import { staticCardData } from '@constants/card.tsx';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { CurrencyCardList } from '@pages/Home/CardList';
import { CardListWrapper } from '@pages/Home/CardList/styled';
import { CurrencyConverter } from '@pages/Home/CurrencyConverter';
import { SectionName } from '@pages/Home/styled';
import { getCurrency } from '@redux/actions/currency';
import { isLoadingSelector, setCurrencies } from '@redux/slices/currencySlice';
import { FlexColumn } from '@styled/components/layout';

import { DATA_TEST_ID } from '../../../cypress/e2e/data.ts';

export const Home = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(isLoadingSelector);

  const getCurrencies = async () => {
    try {
      await dispatch(getCurrency());
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    const lastUpdated = localStorage.getItem('lastUpdated');
    const now = new Date();

    if (lastUpdated) {
      const lastUpdatedDate = new Date(lastUpdated);
      const diffHours = (now - lastUpdatedDate) / (1000 * 60 * 60);

      if (diffHours < 1) {
        const cachedCurrencies = localStorage.getItem('currencies');
        if (cachedCurrencies) {
          dispatch(setCurrencies(JSON.parse(cachedCurrencies)));
          return;
        }
      }
    }
    getCurrencies();
  }, [dispatch]);

  return (
    <FlexColumn $gap="l" data-test-id={DATA_TEST_ID.HOME_PAGE}>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <SectionName>Stocks</SectionName>
          <CardListWrapper>
            <CurrencyCard cardData={staticCardData[0]} isDynamicCard={false} />
            <CurrencyCard cardData={staticCardData[1]} isDynamicCard={false} />
          </CardListWrapper>
          <SectionName>Quotes</SectionName>
          <CurrencyCardList />
        </>
      )}
      <CurrencyModal>
        <CurrencyConverter />
      </CurrencyModal>
    </FlexColumn>
  );
};

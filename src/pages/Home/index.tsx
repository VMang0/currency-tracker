import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CurrencyCard } from '@components/CurrencyCard';
import { CurrencyModal } from '@components/CurrencyModal';
import { CurrencyConverter } from '@components/forms/CurrencyConverter';
import { Loader } from '@components/Loader';
import { staticCardData } from '@constants/card';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { CurrencyCardList } from '@pages/Home/components/CardList';
import { CardListWrapper } from '@pages/Home/components/CardList/styled';
import { HomeStyled, SectionName } from '@pages/Home/styled';
import { getCachedCurrencies } from '@pages/Home/utils/getCachedCurrencies';
import { setCurrencies } from '@redux/slices/currencySlice';
import { isLoadingSelector } from '@redux/slices/currencySlice/selectors';
import { getCurrency } from '@redux/slices/currencySlice/thunks';

import { DATA_TEST_ID } from '../../../cypress/e2e/data';

export const Home = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    const cachedCurrencies = getCachedCurrencies();
    if (cachedCurrencies) {
      dispatch(setCurrencies(cachedCurrencies));
      return;
    }
    dispatch(getCurrency());
  }, [dispatch]);

  return (
    <HomeStyled data-test-id={DATA_TEST_ID.HOME_PAGE}>
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
    </HomeStyled>
  );
};

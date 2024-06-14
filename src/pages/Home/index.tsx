// noinspection TypeScriptValidateTypes

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CurrencyModal } from '@components/CurrencyModal';
import { Loader } from '@components/Loader';
import { CurrencyCardList } from '@pages/Home/CardList';
import { CurrencyConverter } from '@pages/Home/CurrencyConverter';
import { SectionName } from '@pages/Home/styled';
import { getCurrency } from '@redux/actions/currency';
import { isLoadingSelector } from '@redux/slices/currencySlice';
import { AppDispatch } from '@redux/store';
import { FlexColumn } from '@styled/components/layout';

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(isLoadingSelector);

  const getCurrencies = async () => {
    try {
      await dispatch(getCurrency());
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <FlexColumn $gap="l">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
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

import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import { CurrencyData } from '@components/forms/CurrencyConverter/components/CurrencyData';
import { CurrencyModal, CurrencyWrapper, Line, ModalTitle } from '@components/forms/CurrencyConverter/styled';
import { Select } from '@components/Select';
import { useCurrencyConverter } from '@hooks/useCurrencyConverter';
import { currenciesSelector } from '@redux/slices/currencySlice/selectors';
import { convertDataCurrency } from '@utils/helpers/convertDataCurrency';
import { stopPropagation } from '@utils/helpers/stopPropagation';

export const CurrencyConverter = () => {
  const currencies = useSelector(currenciesSelector);
  const {
    currencyOptions,
    initialFromValue,
    initialToValue,
    chooseCurrencyTo,
    chooseCurrencyFrom,
    convertValue,
    currencyFrom,
    currencyTo,
    ratio,
  } = useCurrencyConverter();

  return (
    <CurrencyModal onClick={stopPropagation}>
      <ModalTitle>Convert</ModalTitle>
      <CurrencyWrapper>
        <Select
          options={currencyOptions}
          initialOption={convertDataCurrency(currencyFrom, currencies)}
          setChooseItem={chooseCurrencyFrom}
        />
        <CurrencyData
          currency={currencyFrom}
          destinationCurrency={currencyTo}
          value={initialFromValue}
          ratio={ratio}
          onChange={(e: ChangeEvent<HTMLInputElement>) => convertValue(e.target.value, 'fromValue')}
        />
      </CurrencyWrapper>
      <Line />
      <CurrencyWrapper>
        <Select
          options={currencyOptions}
          initialOption={convertDataCurrency(currencyTo, currencies)}
          setChooseItem={chooseCurrencyTo}
        />
        <CurrencyData
          currency={currencyTo}
          destinationCurrency={currencyFrom}
          value={initialToValue}
          ratio={1 / ratio}
          onChange={(e: ChangeEvent<HTMLInputElement>) => convertValue(e.target.value, 'toValue')}
        />
      </CurrencyWrapper>
    </CurrencyModal>
  );
};

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Select } from '@components/Select';
import {
  CurrencyDataStyled,
  CurrencyInput,
  CurrencyModalStyled,
  CurrencyWrapper,
  LineStyled,
  ModalTitle,
  RatioStyled,
} from '@pages/Home/CurrencyConverter/styled';
import { convertCurrency } from '@redux/actions/currency';
import {
  currencyFromSelector,
  currencyToSelector,
  ratioSelector,
  setCurrencyFrom,
  setCurrencyTo,
} from '@redux/slices/converterSlice';
import { latestCurrenciesSelector } from '@redux/slices/currencySlice';
import { AppDispatch } from '@redux/store';
import { convertDataCurrency } from '@utils/convertDataCurrency';

export const CurrencyConverter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const latestCurrencies = useSelector(latestCurrenciesSelector);
  const currencyFrom = useSelector(currencyFromSelector);
  const currencyTo = useSelector(currencyToSelector);
  const ratio = useSelector(ratioSelector);
  const [initialFromValue, setInitialFromValue] = useState<number>(1);
  const [initialToValue, setInitialToValue] = useState<number>(ratio);

  const currencyOptions = Object.keys(latestCurrencies).map((value) => convertDataCurrency(value));
  const chooseCurrencyTo = (value) => dispatch(setCurrencyTo(value));
  const chooseCurrencyFrom = (value) => dispatch(setCurrencyFrom(value));

  const getRatio = async () => {
    await dispatch(convertCurrency({ currencyFrom, currencyTo }));
  };
  useEffect(() => {
    getRatio();
  }, [currencyFrom, currencyTo]);

  useEffect(() => {
    setInitialToValue(ratio);
  }, [ratio]);

  const convertToValue = (e) => {
    const fromValue = e.target.value;
    const toValue = Number((fromValue * ratio).toFixed(3));
    setInitialFromValue(fromValue);
    setInitialToValue(toValue);
  };
  const convertFromValue = (e) => {
    const toValue = e.target.value;
    const fromValue = Number((toValue * ratio).toFixed(3));
    setInitialFromValue(fromValue);
    setInitialToValue(toValue);
  };

  return (
    <CurrencyModalStyled onClick={(e) => e.stopPropagation()}>
      <ModalTitle>Convert</ModalTitle>
      <CurrencyWrapper>
        <Select
          options={currencyOptions}
          initialOption={convertDataCurrency(currencyFrom)}
          setChooseItem={chooseCurrencyFrom}
        />
        <CurrencyDataStyled>
          <RatioStyled>
            1 {currencyFrom} - {ratio} {currencyTo}
          </RatioStyled>
          <CurrencyInput type="number" value={initialFromValue ?? 0} onChange={convertToValue} />
        </CurrencyDataStyled>
      </CurrencyWrapper>
      <LineStyled />
      <CurrencyWrapper>
        <Select
          options={currencyOptions}
          initialOption={convertDataCurrency(currencyTo)}
          setChooseItem={chooseCurrencyTo}
        />
        <CurrencyDataStyled>
          <RatioStyled>
            1 {currencyTo} - {(1 / ratio).toFixed(3) ?? 0} {currencyFrom}
          </RatioStyled>
          <CurrencyInput type="number" value={initialToValue ?? 0} onChange={convertFromValue} />
        </CurrencyDataStyled>
      </CurrencyWrapper>
    </CurrencyModalStyled>
  );
};

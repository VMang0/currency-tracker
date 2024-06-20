import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Select } from '@components/Select';
import { useAppDispatch } from '@hooks/useAppDispatch';
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
import { convertDataCurrency } from '@utils/helpers/convertDataCurrency';

export const CurrencyConverter = () => {
  const dispatch = useAppDispatch();
  const latestCurrencies = useSelector(latestCurrenciesSelector);
  const currencyFrom = useSelector(currencyFromSelector);
  const currencyTo = useSelector(currencyToSelector);
  const ratio = useSelector(ratioSelector);
  const [initialFromValue, setInitialFromValue] = useState(1);
  const [initialToValue, setInitialToValue] = useState<number>(ratio);

  const currencyOptions = Object.keys(latestCurrencies).map((value) => convertDataCurrency(value));
  const chooseCurrencyTo = (value) => dispatch(setCurrencyTo(value));
  const chooseCurrencyFrom = (value) => dispatch(setCurrencyFrom(value));

  const getRatio = async () => {
    try {
      await dispatch(convertCurrency({ currencyFrom, currencyTo }));
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    getRatio();
  }, [currencyFrom, currencyTo]);

  useEffect(() => {
    setInitialToValue(ratio);
  }, [ratio]);

  const convertValue = (e: ChangeEvent<HTMLInputElement>, inputType: string) => {
    const isFromValue = inputType === 'fromValue';
    const currentValue = e.target.value;
    const convertValue = Number((currentValue * ratio).toFixed(3));
    setInitialFromValue(isFromValue ? convertValue : currentValue);
    setInitialToValue(isFromValue ? currentValue : convertValue);
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
            1 {currencyFrom} - {ratio.toFixed(6)} {currencyTo}
          </RatioStyled>
          <CurrencyInput
            type="number"
            value={initialFromValue ?? 0}
            onChange={(e: ChangeEvent<HTMLInputElement>) => convertValue(e, 'toValue')}
          />
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
            1 {currencyTo} - {(1 / ratio).toFixed(6)} {currencyFrom}
          </RatioStyled>
          <CurrencyInput
            type="number"
            value={initialToValue ?? 0}
            onChange={(e: ChangeEvent<HTMLInputElement>) => convertValue(e, 'fromValue')}
          />
        </CurrencyDataStyled>
      </CurrencyWrapper>
    </CurrencyModalStyled>
  );
};

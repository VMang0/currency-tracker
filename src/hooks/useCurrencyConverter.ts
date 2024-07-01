import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { setCurrencyFrom, setCurrencyTo } from '@redux/slices/converterSlice';
import { currencyFromSelector, currencyToSelector, ratioSelector } from '@redux/slices/converterSlice/selectors';
import { convertCurrency } from '@redux/slices/converterSlice/thunk';
import { currenciesSelector, latestCurrenciesSelector } from '@redux/slices/currencySlice/selectors';
import { convertDataCurrency } from '@utils/helpers/convertDataCurrency';

export const useCurrencyConverter = () => {
  const dispatch = useAppDispatch();
  const latestCurrencies = useSelector(latestCurrenciesSelector);
  const currencies = useSelector(currenciesSelector);
  const currencyFrom = useSelector(currencyFromSelector);
  const currencyTo = useSelector(currencyToSelector);
  const ratio = useSelector(ratioSelector) as number;
  const [initialFromValue, setInitialFromValue] = useState(1);
  const [initialToValue, setInitialToValue] = useState<number>(ratio);

  const currencyOptions = Object.keys(latestCurrencies).map((value) => convertDataCurrency(value, currencies));

  const chooseCurrencyTo = (value: string) => dispatch(setCurrencyTo(value));
  const chooseCurrencyFrom = (value: string) => dispatch(setCurrencyFrom(value));

  useEffect(() => {
    dispatch(convertCurrency({ currencyFrom, currencyTo }));
  }, [dispatch, currencyFrom, currencyTo]);

  useEffect(() => {
    setInitialToValue(ratio);
  }, [ratio]);

  const convertValue = (value: string, inputType: 'fromValue' | 'toValue') => {
    const currentValue = parseFloat(value);
    const isFromValue = inputType === 'fromValue';
    const fixRatio = Number(ratio.toFixed(5));
    const convertedValue = isFromValue ? currentValue * fixRatio : currentValue / fixRatio;

    if (isFromValue) {
      setInitialFromValue(currentValue);
      setInitialToValue(Number(convertedValue.toFixed(5)));
    } else {
      setInitialFromValue(Number(convertedValue.toFixed(5)));
      setInitialToValue(currentValue);
    }
  };

  return {
    currencyOptions,
    initialFromValue,
    initialToValue,
    chooseCurrencyTo,
    chooseCurrencyFrom,
    convertValue,
    currencyFrom,
    currencyTo,
    ratio,
  };
};

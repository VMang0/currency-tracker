import { createAsyncThunk } from '@reduxjs/toolkit';

import { CurrenciesType, LatestCurrenciesType } from '@types/currency';
import { currencyAxios } from '@utils/axios';

export type CurrencyResponse = {
  latestCurrencies: LatestCurrenciesType;
  currencies: CurrenciesType;
};

export type RejectedResponse = {
  message: string;
};

const currencyApiKey = process.env.REACT_APP_CURRENCY_API_KEY;
const currencies = 'ARS%2CJPY%2CCNY%2CBTC%2CGBP%2CEUR%2CAUD%2CCAD%2CUSD';
const urlCurrencies = `/currencies?apikey=${currencyApiKey}&currencies=${currencies}`;
const urlCurrenciesLatest = `/latest?apikey=${currencyApiKey}&currencies=${currencies}`;

export const getCurrency = createAsyncThunk<CurrencyResponse, void, { rejectValue: RejectedResponse }>(
  'currency/get',
  async (_, { rejectWithValue }) => {
    try {
      const responseCurrencies = await currencyAxios.get(urlCurrencies);
      const responseCurrenciesLatest = await currencyAxios.get(urlCurrenciesLatest);
      return { latestCurrencies: responseCurrenciesLatest.data, currencies: responseCurrencies.data.data };
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  },
);

export const convertCurrency = createAsyncThunk<
  number,
  { currencyFrom: string; currencyTo: string },
  { rejectValue: RejectedResponse }
>('currency/convert', async ({ currencyFrom, currencyTo }, { rejectWithValue }) => {
  try {
    const responseCurrencies = await currencyAxios.get(
      `/latest?apikey=${currencyApiKey}&currencies=${currencyTo}&base_currency=${currencyFrom}`,
    );
    return responseCurrencies.data.data[currencyTo].value;
  } catch (e) {
    return rejectWithValue(e.response.data);
  }
});

export const { fulfilled, pending, rejected } = getCurrency;

import { AxiosResponse } from 'axios';

import { currencyAxios } from '@api/axios/currency';
import { CurrencyResponseType, CurrencyType, LatestCurrenciesType } from '@type/currency';
import { handleError } from '@utils/helpers/errorHandler';

const currencyApiKey = process.env.REACT_APP_CURRENCY_API_KEY as string;
const currencies = 'ARS%2CJPY%2CCNY%2CBTC%2CGBP%2CEUR%2CAUD%2CCAD%2CUSD';
const urlCurrencies = `/currencies?apikey=${currencyApiKey}&currencies=${currencies}`;
const urlCurrenciesLatest = `/latest?apikey=${currencyApiKey}&currencies=${currencies}`;

export const getCurrencyData = async (): Promise<CurrencyResponseType> => {
  try {
    const responseCurrencies: AxiosResponse<{ data: Record<string, CurrencyType> }> =
      await currencyAxios.get(urlCurrencies);
    const responseCurrenciesLatest: AxiosResponse<LatestCurrenciesType> = await currencyAxios.get(urlCurrenciesLatest);
    return {
      latestCurrencies: responseCurrenciesLatest.data,
      currencies: responseCurrencies.data.data,
    };
  } catch (e: unknown) {
    throw handleError(e);
  }
};

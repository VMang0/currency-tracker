import { AxiosResponse } from 'axios';

import { currencyAxios } from '@api/axios/currency';
import { ConverterParamsType } from '@types/converter';
import { handleError } from '@utils/helpers/errorHandler';

const currencyApiKey = process.env.REACT_APP_CURRENCY_API_KEY as string;

export const convertCurrencyValue = async ({ currencyTo, currencyFrom }: ConverterParamsType): Promise<number> => {
  try {
    const responseCurrencies: AxiosResponse = await currencyAxios.get(
      `/latest?apikey=${currencyApiKey}&currencies=${currencyTo}&base_currency=${currencyFrom}`,
    );
    return responseCurrencies.data.data[currencyTo].value;
  } catch (e: unknown) {
    throw handleError(e);
  }
};

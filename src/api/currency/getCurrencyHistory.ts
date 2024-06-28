import { coinAxios } from '@api/axios/coin';
import { CurrencyHistoryFetchDataType, CurrencyHistoryParamsType } from '@api/currency/types';
import { CurrencyHistoryType } from '@types/currency';
import { handleError } from '@utils/helpers/errorHandler';

export const getCurrencyHistory = async ({
  currency = 'USD',
  dateStart,
  dateEnd,
}: CurrencyHistoryFetchDataType): Promise<CurrencyHistoryType[]> => {
  try {
    const params: CurrencyHistoryParamsType = {
      period_id: '1DAY',
      time_start: dateStart,
      time_end: dateEnd,
    };

    const { data } = await coinAxios.get(`/exchangerate/USDT/${currency}/history`, {
      params,
    });
    return data;
  } catch (e: unknown) {
    throw handleError(e);
  }
};

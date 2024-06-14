import { coinAxios } from '@utils/axios';

type CurrencyHistoryParams = {
  period_id: string;
  time_start: string;
  time_end: string;
};

export const getCurrencyHistory = async ({
  currency = 'JPY',
  dateStart,
  dateEnd,
}: {
  currency: string;
  dateStart: string;
  dateEnd: string;
}) => {
  try {
    const params: CurrencyHistoryParams = {
      period_id: '1DAY',
      time_start: dateStart,
      time_end: dateEnd,
    };

    const response = await coinAxios.get(`/exchangerate/USDT/${currency}/history`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching currency history:', error);
    throw new Error(error);
  }
};

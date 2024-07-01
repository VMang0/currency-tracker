import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCurrencyHistory } from '@api/currency/getCurrencyHistory';
import { CurrencyHistoryFetchDataType } from '@api/currency/types';
import { RejectedResponse } from '@redux/slices/converterSlice/types';
import notificationService from '@services/notification';
import { CurrencyHistoryType } from '@type/currency';

export const fetchHistory = createAsyncThunk<
  CurrencyHistoryType[],
  CurrencyHistoryFetchDataType,
  { rejectValue: RejectedResponse }
>('timeline/fetchHistory', async (CurrencyHistoryFetchData, { rejectWithValue }) => {
  try {
    const historyData = await getCurrencyHistory(CurrencyHistoryFetchData);
    return historyData;
  } catch (e) {
    let errorMessage = e as string;
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    notificationService.notify('Something went wrong');
    return rejectWithValue({ message: errorMessage });
  }
});

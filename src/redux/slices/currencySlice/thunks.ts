import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCurrencyData } from '@api/currency/getCurrency';
import { RejectedResponse } from '@redux/slices/converterSlice/types';
import { CurrencyResponseType } from '@types/currency';
import { currencies } from '@utils/data/currency';
import { latestCurrencies } from '@utils/data/latestCurrency';
import { addCurrenciesDataToStorage } from '@utils/helpers/addCurrenciesDataToStorage';

export const getCurrency = createAsyncThunk<CurrencyResponseType, void, { rejectValue: RejectedResponse }>(
  'currency/get',
  async (_, { rejectWithValue }) => {
    try {
      const data: CurrencyResponseType = await getCurrencyData();
      addCurrenciesDataToStorage(data);
      return data;
    } catch (e: unknown) {
      const errorMessage = e as string;
      if (e instanceof Error) {
        const data: CurrencyResponseType = { currencies, latestCurrencies };
        addCurrenciesDataToStorage(data);
        return rejectWithValue(data);
      }
      return rejectWithValue({ message: errorMessage });
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';

import { convertCurrencyValue } from '@api/currency/convertCurrency';
import { RejectedResponse } from '@redux/slices/converterSlice/types';
import { ConverterParamsType } from '@type/converter';

export const convertCurrency = createAsyncThunk<number, ConverterParamsType, { rejectValue: RejectedResponse }>(
  'currency/convert',
  async (converterParams, { rejectWithValue }) => {
    try {
      const data = await convertCurrencyValue(converterParams);
      return data;
    } catch (e: unknown) {
      let errorMessage = e as string;
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      return rejectWithValue({ message: errorMessage });
    }
  },
);

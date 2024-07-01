import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { convertCurrency } from '@redux/slices/converterSlice/thunk';
import { ConverterSliceInitialStateType } from '@redux/slices/converterSlice/types';

const initialState: ConverterSliceInitialStateType = {
  isLoading: false,
  currencyFrom: 'USD',
  currencyTo: 'USD',
  ratio: 1,
};

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setCurrencyTo: (state, action: PayloadAction<string>) => {
      state.currencyTo = action.payload;
    },
    setCurrencyFrom: (state, action: PayloadAction<string>) => {
      state.currencyFrom = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(convertCurrency.fulfilled, (state: ConverterSliceInitialStateType, action: PayloadAction<number>) => {
        state.isLoading = false;
        state.ratio = action.payload;
      })
      .addCase(convertCurrency.pending, (state: ConverterSliceInitialStateType) => {
        state.isLoading = true;
      })
      .addCase(convertCurrency.rejected, (state: ConverterSliceInitialStateType) => {
        state.isLoading = false;
      });
  },
});

export const { setCurrencyTo, setCurrencyFrom } = converterSlice.actions;
export default converterSlice.reducer;

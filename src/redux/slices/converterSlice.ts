import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

import { convertCurrency } from '@redux/actions/currency';

type ConverterType = {
  isLoading: boolean;
  currencyFrom: string;
  currencyTo: string;
  ratio: number;
};

const initialState: ConverterType = {
  isLoading: false,
  currencyFrom: 'USD',
  currencyTo: 'USD',
  ratio: 1,
};

const converterSlice = createSlice<ConverterType, SliceCaseReducers<ConverterType>>({
  name: 'converter',
  initialState,
  reducers: {
    setCurrencyTo: (state, action) => {
      state.currencyTo = action.payload;
    },
    setCurrencyFrom: (state, action) => {
      state.currencyFrom = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(convertCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ratio = action.payload;
      })
      .addCase(convertCurrency.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(convertCurrency.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const currencyFromSelector = (state) => state.converter.currencyFrom;
export const currencyToSelector = (state) => state.converter.currencyTo;
export const ratioSelector = (state) => state.converter.ratio;

export const { setCurrencyTo, setCurrencyFrom } = converterSlice.actions;
export default converterSlice.reducer;

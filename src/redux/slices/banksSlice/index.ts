import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { currencyData } from '@constants/currency';
import { BankCardInitialStateType } from '@redux/slices/banksSlice/types';

const initialState: BankCardInitialStateType = {
  searchQuery: '',
  filteredOptions: currencyData,
};

const banksSlice = createSlice({
  name: 'banks',
  initialState,
  reducers: {
    setSearchQuery: (state: BankCardInitialStateType, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredOptions = currencyData.filter(
        (option) =>
          option.value.includes(action.payload.toUpperCase()) ||
          option.label.toUpperCase().includes(action.payload.toUpperCase()),
      );
    },
  },
});

export const { setSearchQuery } = banksSlice.actions;
export default banksSlice.reducer;

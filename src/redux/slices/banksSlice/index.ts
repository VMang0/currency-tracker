import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BankCardInitialStateType } from '@redux/slices/banksSlice/types';

const initialState: BankCardInitialStateType = {
  searchQuery: '',
};

const banksSlice = createSlice({
  name: 'banks',
  initialState,
  reducers: {
    setSearchQuery: (state: BankCardInitialStateType, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = banksSlice.actions;
export default banksSlice.reducer;

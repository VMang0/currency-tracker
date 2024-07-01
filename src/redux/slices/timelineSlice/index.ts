import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Period } from '@constants/period';
import { fetchHistory } from '@redux/slices/timelineSlice/thunks';
import { CurrencyHistoryType } from '@type/currency';

type TimelineState = {
  isLoading: boolean;
  dateStart: string;
  dateEnd: string;
  period: Period;
  historyData: CurrencyHistoryType[] | null;
  currency: string;
};

const initialState: TimelineState = {
  isLoading: false,
  historyData: null,
  dateStart: '',
  dateEnd: '',
  period: Period.ONE_DAY,
  currency: 'USD',
};

const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    setDateStart: (state: TimelineState, action: PayloadAction<string>) => {
      state.dateStart = action.payload;
    },
    setDateEnd: (state: TimelineState, action: PayloadAction<string>) => {
      state.dateEnd = action.payload;
    },
    setPeriod: (state: TimelineState, action: PayloadAction<Period>) => {
      state.period = action.payload;
    },
    setCurrency: (state: TimelineState, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.historyData = action.payload;
      })
      .addCase(fetchHistory.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setDateStart, setDateEnd, setPeriod, setCurrency } = timelineSlice.actions;
export default timelineSlice.reducer;

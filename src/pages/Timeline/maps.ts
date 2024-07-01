import { Period } from '@constants/period';
import { setCurrency, setDateEnd, setDateStart, setPeriod } from '@redux/slices/timelineSlice';
import { fetchHistory } from '@redux/slices/timelineSlice/thunks';
import { AppDispatch, RootState } from '@redux/store';

export const mapStateToProps = (state: RootState) => ({
  dateStart: state.timeline.dateStart,
  dateEnd: state.timeline.dateEnd,
  period: state.timeline.period,
  historyData: state.timeline.historyData,
  currency: state.timeline.currency,
  isLoading: state.timeline.isLoading,
});

export const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setDateStart: (date: string) => dispatch(setDateStart(date)),
  setDateEnd: (date: string) => dispatch(setDateEnd(date)),
  setPeriod: (period: Period) => dispatch(setPeriod(period)),
  setCurrency: (currency: string) => dispatch(setCurrency(currency)),
  fetchHistory: (currency: string, dateStart: string, dateEnd: string) =>
    dispatch(fetchHistory({ currency, dateStart, dateEnd })),
});

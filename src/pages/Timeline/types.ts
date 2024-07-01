import { Period } from '@constants/period';
import { CurrencyHistoryType } from '@type/currency';

export type TimelinePropsType = {
  dateStart: string;
  period: Period;
  historyData: CurrencyHistoryType[] | null;
  currency: string;
  isLoading: boolean;
  setDateStart: (date: string) => void;
  setDateEnd: (date: string) => void;
  fetchHistory: (currency: string, startDate: string, endDate: string) => void;
};

import { Period } from '@constants/period';
import { formatDateToISOWithOptionalEndOfDay } from '@pages/Timeline/utils/formatDateToISOWithOptionalEndOfDay';

export const getEndDateBasedOnPeriod = (dateStart: string, period: Period): string | null => {
  if (!dateStart || !period) return null;
  const startDate = new Date(dateStart);

  switch (period) {
    case Period.ONE_DAY:
      startDate.setDate(startDate.getDate());
      break;
    case Period.FIVE_DAYS:
      startDate.setDate(startDate.getDate() + 4);
      break;
    case Period.TEN_DAYS:
      startDate.setDate(startDate.getDate() + 9);
      break;
    case Period.TWENTY_DAYS:
      startDate.setDate(startDate.getDate() + 19);
      break;
    case Period.ONE_MONTH:
      startDate.setMonth(startDate.getMonth() + 1);
      break;
    default:
      break;
  }
  return formatDateToISOWithOptionalEndOfDay(startDate, true);
};

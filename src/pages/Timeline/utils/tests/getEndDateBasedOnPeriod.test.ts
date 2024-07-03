import { Period } from '@constants/period';
import { formatDateToISOWithOptionalEndOfDay } from '@pages/Timeline/utils/formatDateToISOWithOptionalEndOfDay';
import { getEndDateBasedOnPeriod } from '@pages/Timeline/utils/getEndDateBasedOnPeriod';

jest.mock('@pages/Timeline/utils/formatDateToISOWithOptionalEndOfDay', () => ({
  formatDateToISOWithOptionalEndOfDay: jest.fn(),
}));

describe('getEndDateBasedOnPeriod', () => {
  beforeEach(() => {
    (formatDateToISOWithOptionalEndOfDay as jest.Mock).mockClear();
  });

  it('should return the correct endDate for one day period', () => {
    const startDate = '2024-07-02T00:00:00.000Z';
    const period = Period.ONE_DAY;
    const expectedEndDate = '2024-07-02T23:59:59';
    (formatDateToISOWithOptionalEndOfDay as jest.Mock).mockReturnValue(expectedEndDate);

    const result = getEndDateBasedOnPeriod(startDate, period);
    expect(result).toBe(expectedEndDate);
    expect(formatDateToISOWithOptionalEndOfDay).toHaveBeenCalledWith(new Date(startDate), true);
  });

  it('should return the correct endDate for 5 days period', () => {
    const startDate = '2024-07-02T00:00:00.000Z';
    const period = Period.FIVE_DAYS;
    const expectedEndDate = '2024-07-06T23:59:59';
    (formatDateToISOWithOptionalEndOfDay as jest.Mock).mockReturnValue(expectedEndDate);

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 4);

    const result = getEndDateBasedOnPeriod(startDate, period);
    expect(result).toBe(expectedEndDate);
    expect(formatDateToISOWithOptionalEndOfDay).toHaveBeenCalledWith(endDate, true);
  });

  it('should return the correct endDate for 10 days period', () => {
    const startDate = '2024-07-02T00:00:00.000Z';
    const period = Period.TEN_DAYS;
    const expectedEndDate = '2024-07-11T23:59:59';
    (formatDateToISOWithOptionalEndOfDay as jest.Mock).mockReturnValue(expectedEndDate);

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 9);

    const result = getEndDateBasedOnPeriod(startDate, period);
    expect(result).toBe(expectedEndDate);
    expect(formatDateToISOWithOptionalEndOfDay).toHaveBeenCalledWith(endDate, true);
  });

  it('should return the correct endDate for 20 days period', () => {
    const startDate = '2024-07-02T00:00:00.000Z';
    const period = Period.TWENTY_DAYS;
    const expectedEndDate = '2024-07-21T23:59:59';
    (formatDateToISOWithOptionalEndOfDay as jest.Mock).mockReturnValue(expectedEndDate);

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 19);

    const result = getEndDateBasedOnPeriod(startDate, period);
    expect(result).toBe(expectedEndDate);
    expect(formatDateToISOWithOptionalEndOfDay).toHaveBeenCalledWith(endDate, true);
  });

  it('should return the correct end date for 1 month period', () => {
    const startDate = '2024-07-02T00:00:00.000Z';
    const period = Period.ONE_MONTH;
    const expectedEndDate = '2024-08-02T23:59:59';
    (formatDateToISOWithOptionalEndOfDay as jest.Mock).mockReturnValue(expectedEndDate);

    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    const result = getEndDateBasedOnPeriod(startDate, period);
    expect(result).toBe(expectedEndDate);
    expect(formatDateToISOWithOptionalEndOfDay).toHaveBeenCalledWith(endDate, true);
  });

  it('should return null if dateStart is empty', () => {
    const startDate = '';
    const period = Period.ONE_DAY;
    const result = getEndDateBasedOnPeriod(startDate, period);
    expect(result).toBeNull();
  });
});

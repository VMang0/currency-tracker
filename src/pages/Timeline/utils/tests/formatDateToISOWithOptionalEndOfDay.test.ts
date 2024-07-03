import { formatDateToISOWithOptionalEndOfDay } from '@pages/Timeline/utils/formatDateToISOWithOptionalEndOfDay';

describe('formatDateToISOWithOptionalEndOfDay', () => {
  it('should format the date to ISO string at the start of the day by default', () => {
    const date = new Date(2024, 6, 2);
    const isoString = formatDateToISOWithOptionalEndOfDay(date);
    expect(isoString).toBe('2024-07-02T00:00:00');
  });

  it('should format the date to ISO string at the end of the day when isEndOfDay is true', () => {
    const date = new Date(2024, 6, 2);
    const isoString = formatDateToISOWithOptionalEndOfDay(date, true);
    expect(isoString).toBe('2024-07-02T23:59:59');
  });

  it('should format a date for the last day of the month correctly with isEndOfDay true', () => {
    const date = new Date(2024, 6, 2);
    const isoString = formatDateToISOWithOptionalEndOfDay(date, true);
    expect(isoString).toBe('2024-07-02T23:59:59');
  });

  it('should format a date for the first day of the month correctly with isEndOfDay false', () => {
    const date = new Date(2024, 6, 2);
    const isoString = formatDateToISOWithOptionalEndOfDay(date, false);
    expect(isoString).toBe('2024-07-02T00:00:00');
  });

  it('should handle the transition from one day to another correctly', () => {
    const date = new Date(2024, 6, 2, 12, 30);
    const isoString = formatDateToISOWithOptionalEndOfDay(date, false);
    expect(isoString).toBe('2024-07-02T00:00:00');
  });
});

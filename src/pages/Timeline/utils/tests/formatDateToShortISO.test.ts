import { formatDateToShortISO } from '@pages/Timeline/utils/formatDateToShortISO';

describe('formatDateToShortISO', () => {
  it('should format a date string to YYYY-MM-DD format', () => {
    const date = '2024-07-02T00:00:00.000Z';
    const shortISODate = formatDateToShortISO(date);
    expect(shortISODate).toBe('2024-07-02');
  });

  it('should format a date string with time to YYYY-MM-DD format', () => {
    const date = '2024-07-02T15:30:00.000Z';
    const shortISODate = formatDateToShortISO(date);
    expect(shortISODate).toBe('2024-07-02');
  });

  it('should format a date string in different time zones to YYYY-MM-DD format', () => {
    const date = '2024-07-02T00:00:00-05:00';
    const shortISODate = formatDateToShortISO(date);
    expect(shortISODate).toBe('2024-07-02');
  });
});

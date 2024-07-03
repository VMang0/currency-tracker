import { convertISOStringTo12HourFormat } from '@utils/helpers/convertTo12HourFormat';

describe('convertISOStringTo12HourFormat', () => {
  it('should convert 2024-07-02T02:05:00.000Z to 2:05am', () => {
    const isoString = '2024-07-02T02:05:00.000Z';
    const result = convertISOStringTo12HourFormat(isoString);
    expect(result).toBe('2:05am');
  });

  it('should convert 2024-07-02T14:00:00.000Z to 11:59pm', () => {
    const isoString = '2024-07-02T14:00:00.000Z';
    const result = convertISOStringTo12HourFormat(isoString);
    expect(result).toBe('11:59pm');
  });

  it('should convert 2024-07-02T23:59:00.000Z to 11:59pm', () => {
    const isoString = '2024-07-02T23:59:00.000Z';
    const result = convertISOStringTo12HourFormat(isoString);
    expect(result).toBe('11:59pm');
  });
});

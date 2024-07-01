export enum Period {
  ONE_DAY = '1DAY',
  FIVE_DAYS = '5DAYS',
  TEN_DAYS = '10DAYS',
  TWENTY_DAYS = '20DAYS',
  ONE_MONTH = '1MONTH',
}

export const periodData = [
  { value: Period.ONE_DAY, label: '1 Day' },
  { value: Period.FIVE_DAYS, label: '5 Days' },
  { value: Period.TEN_DAYS, label: '10 Days' },
  { value: Period.TWENTY_DAYS, label: '20 Days' },
  { value: Period.ONE_MONTH, label: '1 Month' },
];

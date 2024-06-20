import { CurrencyHistoryType } from '@components/Chart/type';
import { theme } from '@styled/theme';

export const generateCharData = (data: CurrencyHistoryType[]) => {
  return [
    {
      barThickness: 1,
      data: data?.map((item) => {
        const lowValue = item.rate_low.toFixed(5);
        const highValue = item.rate_high.toFixed(5);
        return [lowValue, highValue];
      }),
      backgroundColor: theme.colors.gray[500],
      stack: 'Stack 0',
      order: 1,
    },
    {
      label: 'Rate Changes',
      data: data?.map((item) => {
        const openValue = item.rate_open.toFixed(5);
        const closeValue = item.rate_close.toFixed(5);
        return [closeValue, openValue];
      }),
      backgroundColor: (ctx: unknown): string => {
        if (ctx === undefined || ctx.raw === undefined) {
          return 'rgba(0, 0, 0, 0)';
        }
        return ctx.raw[1] > ctx.raw[0] ? 'rgba(22, 199, 130, 1)' : 'rgba(234, 57, 67, 1)';
      },
      barPercentage: 1,
      barThickness: 'flex',
      minBarLength: 1,
      stack: 'Stack 0',
      order: 0,
    },
  ];
};

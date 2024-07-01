import { ChartConfiguration, Color, ScriptableContext } from 'chart.js';

import { CurrencyHistoryType } from '@components/Chart/types';
import { theme } from '@styled/theme';

export const generateCharData = (data: CurrencyHistoryType[]): ChartConfiguration['data']['datasets'] => {
  return [
    {
      barThickness: 1,
      data: data?.map((item) => {
        const lowValue = parseFloat(item.rate_low.toFixed(5));
        const highValue = parseFloat(item.rate_high.toFixed(5));
        return [lowValue, highValue] as [number, number];
      }),
      backgroundColor: theme.colors.gray[500] as Color,
      stack: 'Stack 0',
      order: 1,
    },
    {
      label: 'Rate Changes',
      data: data?.map((item) => {
        const openValue = parseFloat(item.rate_open.toFixed(5));
        const closeValue = parseFloat(item.rate_close.toFixed(5));
        return [closeValue, openValue] as [number, number];
      }),
      backgroundColor: (ctx: ScriptableContext<'bar'>): Color => {
        if (!ctx || !ctx.raw || !Array.isArray(ctx.raw)) return 'rgba(0, 0, 0, 0)';
        const raw = ctx.raw as number[];
        return raw[1] > raw[0] ? 'rgba(22, 199, 130, 1)' : 'rgba(234, 57, 67, 1)';
      },
      barPercentage: 1,
      barThickness: 'flex',
      minBarLength: 1,
      stack: 'Stack 0',
      order: 0,
    },
  ];
};

import Chart from 'chart.js/auto';
import { RefObject } from 'react';

export type CurrencyHistoryType = {
  time_period_start: string;
  time_period_end: string;
  time_open: string;
  time_close: string;
  rate_open: number;
  rate_high: number;
  rate_low: number;
  rate_close: number;
};

export type BarChartPropsType = {
  historyData: CurrencyHistoryType[] | null;
};

export type BarChartStateType = {
  chartRef: RefObject<HTMLCanvasElement>;
  chartInstance: Chart | null;
};

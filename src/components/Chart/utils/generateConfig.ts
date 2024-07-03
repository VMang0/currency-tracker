import { ChartConfiguration, ChartTypeRegistry, TooltipItem } from 'chart.js/auto';

import { CurrencyHistoryType } from '@components/Chart/types';

type CustomTooltipItem = TooltipItem<keyof ChartTypeRegistry> & { raw: [string, string] };

const STEP_INDEX = 0.001;
const MIN_VALUE_INDEX = 0.97;
const MAX_VALUE_INDEX = 1.03;

export const generateConfig = (
  datasets: ChartConfiguration['data']['datasets'],
  data: CurrencyHistoryType[],
): ChartConfiguration => {
  const labels = data?.map((item) => item.time_close.split('T')[0]);
  const minValue = Math.min(...data.map((item) => Math.min(item.rate_open, item.rate_close)));
  const maxValue = Math.max(...data.map((item) => Math.max(item.rate_open, item.rate_close)));

  const minYValue = minValue * MIN_VALUE_INDEX;
  const maxYValue = maxValue * MAX_VALUE_INDEX;
  const stepSize = minYValue * STEP_INDEX;

  return {
    type: 'bar' as const,
    data: {
      labels,
      datasets,
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
        },
        tooltip: {
          callbacks: {
            beforeBody: (tooltipItems: CustomTooltipItem[]): string[] => [
              `open value: ${tooltipItems[0]?.raw[0] ?? ''}`,
              `close value: ${tooltipItems[0]?.raw[1] ?? ''}`,
            ],
            label: (): string => '',
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'DAY',
          },
        },
        y: {
          position: 'right' as const,
          ticks: {
            stepSize,
          },
          stacked: false,
          min: minYValue,
          max: maxYValue,
        },
      },
    },
  };
};

import Chart from 'chart.js/auto';
import React, { Component, createRef, RefObject } from 'react';

import { generateConfig } from '@components/Chart/config';
import { generateCharData } from '@components/Chart/data';
import { CurrencyHistoryType } from '@components/Chart/type';
import notificationService from '@services/notification';

type BarChartPropsType = {
  data: CurrencyHistoryType[];
};

type BarChartStateType = {
  chartRef: RefObject<HTMLCanvasElement>;
  chartInstance: Chart | null;
};

class BarChart extends Component<BarChartPropsType, BarChartStateType> {
  chartRef: RefObject<HTMLCanvasElement> = createRef();

  chartInstance: Chart | null = null;

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate(prevProps: BarChartPropsType) {
    const { data } = this.props;
    if (data !== prevProps.data) {
      this.updateChart();
    }
  }

  componentWillUnmount() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }

  updateChart() {
    this.destroyChart();
    this.renderChart();
  }

  destroyChart() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
      this.chartInstance = null;
    }
  }

  renderChart() {
    const { data } = this.props;
    const charData = data && generateCharData(data);
    const config = data && generateConfig(charData, data);
    const ctx = this.chartRef.current?.getContext('2d');
    if (ctx) {
      this.chartInstance = new Chart(ctx, config);
      notificationService.notify('Chart successfully created!');
    }
  }

  render() {
    return <canvas ref={this.chartRef} style={{ width: '1100px', minHeight: '300px' }} />;
  }
}

export default BarChart;

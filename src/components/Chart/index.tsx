import Chart, { ChartConfiguration } from 'chart.js/auto';
import { Component, createRef, RefObject } from 'react';
import { connect } from 'react-redux';

import { Canvas } from '@components/Chart/styled';
import { BarChartPropsType, BarChartStateType } from '@components/Chart/types';
import { generateCharData } from '@components/Chart/utils/generateCharData';
import { generateConfig } from '@components/Chart/utils/generateConfig';
import { RootState } from '@redux/store';
import notificationService from '@services/notification';

import { DATA_TEST_ID } from '../../../cypress/e2e/data';

class BarChart extends Component<BarChartPropsType, BarChartStateType> {
  chartRef: RefObject<HTMLCanvasElement> = createRef();
  chartInstance: Chart | null = null;

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate(prevProps: BarChartPropsType) {
    const { historyData } = this.props;
    if (historyData !== prevProps.historyData) {
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
    const { historyData } = this.props;
    if (!historyData) return;
    const charData: ChartConfiguration['data']['datasets'] = historyData && generateCharData(historyData);
    const config: ChartConfiguration = historyData && generateConfig(charData, historyData);
    const ctx = this.chartRef.current?.getContext('2d');
    if (ctx) {
      this.chartInstance = new Chart(ctx, config);
      notificationService.notify('Chart successfully created!');
    }
  }

  render() {
    return <Canvas ref={this.chartRef} data-test-id={DATA_TEST_ID.BAR_CHART} />;
  }
}

const mapStateToProps = (state: RootState) => ({
  historyData: state.timeline.historyData,
});

export default connect(mapStateToProps)(BarChart);

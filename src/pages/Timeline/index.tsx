import { ChangeEvent, Component } from 'react';

import BarChart from '@components/Chart';
import { Loader } from '@components/Loader';
import { Select } from '@components/Select';
import { currencyData } from '@constants/currency';
import { periodData } from '@constants/period';
import { ControlPanel, TimelineStyled } from '@pages/Timeline/styled';
import { getCurrencyHistory } from '@redux/actions/history';
import notificationService from '@services/notification';
import { calculateEndDate, formatToFullDate, formatToShortDate } from '@utils/helpers/formatDate';

import { DATA_TEST_ID } from '../../../cypress/e2e/data.ts';

interface TimelineProps {}
interface TimelineState {
  isLoading: boolean;
  dateStart: string;
  dateEnd: string;
  period: string;
  historyData: [] | null;
  currency: string;
}

class Timeline extends Component<TimelineProps, TimelineState> {
  constructor(props: TimelineProps) {
    super(props);
    const today = new Date();
    today.setDate(today.getDate() - 1);
    const formattedStartDate = formatToFullDate(today);
    const formattedEndDate = formatToFullDate(today, true);
    this.state = {
      isLoading: false,
      historyData: null,
      dateStart: formattedStartDate,
      dateEnd: formattedEndDate,
      period: '1DAY',
      currency: 'USD',
    };
  }

  componentDidMount() {
    this.getHistory();
  }

  componentDidUpdate(prevProps: TimelineProps, prevState: TimelineState) {
    const { dateStart, period, currency } = this.state;
    if (prevState.dateStart !== dateStart || prevState.period !== period || prevState.currency !== currency) {
      this.updateEndDateAndFetchHistory();
    }
  }

  handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const dateStart = formatToFullDate(new Date(event.target.value));
    this.setState({ dateStart });
  };

  handlePeriodChange = (data: string) => {
    this.setState({ period: data });
  };

  updateEndDateAndFetchHistory = async () => {
    const { dateStart, period } = this.state;
    const dateEnd = calculateEndDate(dateStart, period);
    await this.setState({ dateEnd });
    await this.getHistory();
  };

  getHistory = async () => {
    try {
      this.setState({ isLoading: true });
      const { dateStart, dateEnd, currency } = this.state;
      const historyData = await getCurrencyHistory({
        currency,
        dateStart,
        dateEnd,
      });
      this.setState({ historyData });
    } catch (error) {
      notificationService.notify('Something went wrong');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { dateStart, historyData, isLoading } = this.state;
    const dateValue = formatToShortDate(dateStart);

    return (
      <TimelineStyled data-test-id={DATA_TEST_ID.TIMELINE_PAGE}>
        <ControlPanel>
          <input
            type="date"
            value={dateValue}
            onChange={this.handleDateChange}
            style={{ minWidth: '200px' }}
            data-test-id={DATA_TEST_ID.INPUT_DATE}
          />
          <Select
            options={periodData}
            setChooseItem={(data) => this.handlePeriodChange(data)}
            initialOption={periodData[0]}
            data-test-id={DATA_TEST_ID.SELECT_PERIOD}
          />
          <Select
            options={currencyData}
            setChooseItem={(data) => this.setState({ currency: data })}
            initialOption={currencyData[0]}
            data-test-id={DATA_TEST_ID.SELECT_CURRENCY}
          />
        </ControlPanel>
        {isLoading && <Loader data-test-id={DATA_TEST_ID.LOADER} />}
        {historyData && !isLoading && <BarChart data={historyData} data-test-id={DATA_TEST_ID.BAR_CHART} />}
      </TimelineStyled>
    );
  }
}

export default Timeline;

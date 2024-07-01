import { Component } from 'react';
import { connect } from 'react-redux';

import BarChart from '@components/Chart';
import { Loader } from '@components/Loader';
import { ControlPanel } from '@pages/Timeline/components/ControlPanel';
import { mapDispatchToProps, mapStateToProps } from '@pages/Timeline/maps';
import { TimelineWrapper } from '@pages/Timeline/styled';
import { TimelinePropsType } from '@pages/Timeline/types';
import { formatDateToISOWithOptionalEndOfDay } from '@pages/Timeline/utils/formatDateToISOWithOptionalEndOfDay';
import { getEndDateBasedOnPeriod } from '@pages/Timeline/utils/getEndDateBasedOnPeriod';

import { DATA_TEST_ID } from '../../../cypress/e2e/data';

class Timeline extends Component<TimelinePropsType> {
  componentDidMount() {
    const { setDateStart, setDateEnd, fetchHistory, currency } = this.props;

    const today = new Date();
    today.setDate(today.getDate() - 1);

    const formattedStartDate = formatDateToISOWithOptionalEndOfDay(today);
    const formattedEndDate = formatDateToISOWithOptionalEndOfDay(today, true);

    setDateStart(formattedStartDate);
    setDateEnd(formattedEndDate);
    fetchHistory(currency, formattedStartDate, formattedEndDate);
  }

  componentDidUpdate(prevProps: TimelinePropsType) {
    const { dateStart, period, currency, setDateEnd, fetchHistory } = this.props;
    if (prevProps.dateStart !== dateStart || prevProps.period !== period || prevProps.currency !== currency) {
      const newDateEnd = getEndDateBasedOnPeriod(dateStart, period);

      if (newDateEnd) {
        setDateEnd(newDateEnd);
        fetchHistory(currency, dateStart, newDateEnd);
      }
    }
  }

  render() {
    const { historyData, isLoading } = this.props;

    return (
      <TimelineWrapper data-test-id={DATA_TEST_ID.TIMELINE_PAGE}>
        <ControlPanel />
        {isLoading && <Loader />}
        {historyData && !isLoading && <BarChart />}
        {!historyData && !isLoading && <p>Sorry, something went wrong!</p>}
      </TimelineWrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);

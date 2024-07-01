import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import { Select } from '@components/Select';
import { currencyData } from '@constants/currency';
import { Period, periodData } from '@constants/period';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { ControlPanelWrapper, DatePicker } from '@pages/Timeline/components/ControlPanel/styled';
import { formatDateToISOWithOptionalEndOfDay } from '@pages/Timeline/utils/formatDateToISOWithOptionalEndOfDay';
import { formatDateToShortISO } from '@pages/Timeline/utils/formatDateToShortISO';
import { setCurrency, setDateStart, setPeriod } from '@redux/slices/timelineSlice';
import { dateStartSelector } from '@redux/slices/timelineSlice/selectors';

import { DATA_TEST_ID } from '../../../../../cypress/e2e/data';

export const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const dateStart = useSelector(dateStartSelector);
  const dateValue = formatDateToShortISO(dateStart);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const dateStart = formatDateToISOWithOptionalEndOfDay(new Date(event.target.value));
    dispatch(setDateStart(dateStart));
  };

  const handlePeriodChange = (data: string) => {
    dispatch(setPeriod(data as Period));
  };

  const handleCurrencyChange = (data: string) => {
    dispatch(setCurrency(data));
  };

  return (
    <ControlPanelWrapper>
      <DatePicker type="date" value={dateValue} onChange={handleDateChange} data-test-id={DATA_TEST_ID.INPUT_DATE} />
      <Select
        options={periodData}
        setChooseItem={handlePeriodChange}
        initialOption={periodData[0]}
        data-test-id={DATA_TEST_ID.SELECT_PERIOD}
      />
      <Select
        options={currencyData}
        setChooseItem={handleCurrencyChange}
        initialOption={currencyData[0]}
        data-test-id={DATA_TEST_ID.SELECT_CURRENCY}
      />
    </ControlPanelWrapper>
  );
};

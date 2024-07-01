import { FC } from 'react';

import {
  CurrencyDataWrapper,
  CurrencyInput,
  Ratio,
} from '@components/forms/CurrencyConverter/components/CurrencyData/styled';
import { CurrencyDataProps } from '@components/forms/CurrencyConverter/components/CurrencyData/types';

import { DATA_TEST_ID } from '../../../../../../cypress/e2e/data';

export const CurrencyData: FC<CurrencyDataProps> = ({ currency, destinationCurrency, value, ratio, onChange }) => (
  <CurrencyDataWrapper>
    <Ratio>
      1 {currency} - <span data-test-id={DATA_TEST_ID.RATIO_VALUE}>{ratio.toFixed(5)}</span> {destinationCurrency}
    </Ratio>
    <CurrencyInput type="number" value={value ?? 0} onChange={onChange} data-test-id={DATA_TEST_ID.CONVERTER_INPUT} />
  </CurrencyDataWrapper>
);

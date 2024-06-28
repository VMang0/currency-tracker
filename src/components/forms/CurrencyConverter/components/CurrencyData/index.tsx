import { FC } from 'react';

import {
  CurrencyDataWrapper,
  CurrencyInput,
  Ratio,
} from '@components/forms/CurrencyConverter/components/CurrencyData/styled';
import { CurrencyDataProps } from '@components/forms/CurrencyConverter/components/CurrencyData/types';

export const CurrencyData: FC<CurrencyDataProps> = ({ currency, destinationCurrency, value, ratio, onChange }) => (
  <CurrencyDataWrapper>
    <Ratio>
      1 {currency} - {ratio.toFixed(5)} {destinationCurrency}
    </Ratio>
    <CurrencyInput type="number" value={value ?? 0} onChange={onChange} />
  </CurrencyDataWrapper>
);

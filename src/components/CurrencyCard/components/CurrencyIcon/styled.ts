import styled from 'styled-components';

import { CurrencyIconWrapperType } from '@components/CurrencyCard/components/CurrencyIcon/types';
import { device } from '@styled/breakPoints';

export const CurrencyIconWrapper = styled.div<CurrencyIconWrapperType>`
  border-radius: 8px;
  width: 80px;
  height: 80px;
  background: ${({ bgColor }) => bgColor};
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white.DEFAULT};
  @media (${device.sm}) {
    width: 60px;
    height: 60px;
    font-size: 25px;
  }
`;

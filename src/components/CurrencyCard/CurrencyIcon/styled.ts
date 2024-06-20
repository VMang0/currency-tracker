import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const CurrencyIconStyled = styled.div`
  border-radius: 8px;
  width: 80px;
  height: 80px;
  background: ${({ $bgColor }) => $bgColor};
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

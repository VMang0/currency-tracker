import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const CurrencyIconStyled = styled.div`
  border-radius: 8px;
  width: 80px;
  height: 80px;
  background: #1d324b;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (${device.sm}) {
    width: 60px;
    height: 60px;
    font-size: 25px;
  }
`;

import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const CurrencyCardStyled = styled.article`
  width: 45%;
  display: flex;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap.s};
  background: ${({ theme }) => theme.cardBg};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  padding: ${({ theme }) => `${theme.spaces.s} ${theme.spaces.m}`};
  @media (${device.md}) {
    width: 100%;
  }
  @media (${device.sm}) {
    padding: ${({ theme }) => `${theme.spaces.xxxs} ${theme.spaces.xxs}`};
  }
`;

export const CardData = styled.div`
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xxs};
  span {
    text-overflow: ellipsis;
  }
`;

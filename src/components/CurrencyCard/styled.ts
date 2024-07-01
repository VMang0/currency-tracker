import styled from 'styled-components';

import { CurrencyCardWrapperType } from '@components/CurrencyCard/types';
import { device } from '@styled/breakPoints';

export const CurrencyCardWrapper = styled.article<CurrencyCardWrapperType>`
  width: 45%;
  display: flex;
  cursor: ${({ isDynamicCard }) => (isDynamicCard ? 'pointer' : 'auto')};
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap.s};
  background: ${({ theme }) => theme.themeColors[100]};
  border: 1px solid ${({ theme }) => theme.themeColors[300]};
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

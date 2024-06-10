import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const SectionName = styled.div`
  width: 45%;
  font-weight: 300;
  text-align: start;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spaces.xs} 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-bottom: 2px solid ${({ theme }) => theme.cardBorder};
  @media (${device.md}) {
    width: 100%;
  }
  @media (${device.lg}) {
    max-width: 100%;
  }
`;

export const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap.l};
  @media (${device.md}) {
    justify-content: center;
  }
  @media (${device.sm}) {
    gap: ${({ theme }) => theme.gap.m};
  }
`;

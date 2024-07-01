import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const SectionName = styled.div`
  width: 45%;
  font-weight: 300;
  text-align: start;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spaces.xs} 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-bottom: 2px solid ${({ theme }) => theme.themeColors[300]};
  @media (${device.md}) {
    width: 100%;
  }
  @media (${device.lg}) {
    max-width: 100%;
  }
`;

export const HomeStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.l};
  @media (${device.lg}) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap.xs};
    justify-content: center;
  }
`;

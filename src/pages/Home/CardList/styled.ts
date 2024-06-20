import styled from 'styled-components';

import { device } from '@styled/breakPoints';

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

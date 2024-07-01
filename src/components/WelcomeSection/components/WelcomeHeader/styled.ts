import styled from 'styled-components';

import { device } from '@styled/breakPoints';
import { FlexColumn } from '@styled/components/layout/styled';

export const WelcomeHeaderWrapper = styled.div`
  background: ${({ theme }) => theme.gradient[100]};
`;

export const WelcomeHeaderContent = styled.div`
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  padding: ${({ theme }) => `${theme.spaces.l} ${theme.spaces.xxl} 60px`};
  gap: ${({ theme }) => theme.gap.s};
  max-width: ${({ theme }) => theme.width.max};
  @media (${device.md}) {
    justify-content: center;
    padding: ${({ theme }) => `${theme.spaces.xs} ${theme.spaces.xxxs} ${theme.spaces.xl}`};
  }
`;

export const TitleWrapper = styled(FlexColumn)`
  align-items: end;
  @media (${device.md}) {
    align-items: center;
  }
`;

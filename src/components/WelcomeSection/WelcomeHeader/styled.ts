import styled from 'styled-components';

import { device } from '@styled/breakPoints';
import { FlexColumn } from '@styled/components/layout';

export const WelcomeHeaderStyled = styled.div`
  background: ${({ theme }) => theme.gradientBg};
`;

export const WelcomeHeaderContentStyled = styled.div`
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 40px 10px 60px 10px; //убрать
  gap: ${({ theme }) => theme.gap.s};
  max-width: ${({ theme }) => theme.width.max};
  @media (${device.md}) {
    justify-content: center;
    padding: 25px 10px 45px 10px; //убрать
  }
`;

export const TitleWrapperStyled = styled(FlexColumn)`
  align-items: end;
  @media (${device.md}) {
    align-items: center;
  }
`;

import styled from 'styled-components';

import { device } from '@styled/breakPoints';

export const ContactsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.gap.xxs};
  @media (${device.lg}) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap.xs};
    justify-content: center;
  }
`;

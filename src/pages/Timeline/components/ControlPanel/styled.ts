import styled from 'styled-components';

import { device } from '@styled/breakPoints';
import { FlexColumn } from '@styled/components/layout/styled';

export const ControlPanelWrapper = styled(FlexColumn)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  gap: ${({ theme }) => theme.gap.xs};
  @media (${device.sm}) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.gap.xs};
  }
`;

export const DatePicker = styled.input`
  min-width: 300px;
  @media (${device.sm}) {
    width: 100%;
  }
`;

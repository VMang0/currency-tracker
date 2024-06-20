import styled from 'styled-components';

import { FlexColumn } from '@styled/components/layout';

export const TimelineStyled = styled(FlexColumn)`
  width: 100%;
  align-items: start;
`;

export const ControlPanel = styled(FlexColumn)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  gap: ${({ theme }) => theme.gap.xxs};
`;

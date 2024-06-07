import styled from 'styled-components';

export const HeaderStyled = styled.header`
  top: 0;
  width: 100%;
  position: sticky;
  background-color: ${({ theme }) => theme.body};
`;

export const HeaderContentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 33px 30px;
  box-sizing: border-box;
  max-width: ${({ theme }) => theme.width.max};
`;

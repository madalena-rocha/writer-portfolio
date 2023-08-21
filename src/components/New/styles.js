import styled from "styled-components";

export const Container = styled.a`
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  padding: 2.4rem;
  border-radius: 8px;

  > h2 {
    margin-bottom: 2.4rem;
  }
`;
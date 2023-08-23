import styled from "styled-components";

export const Container = styled.a`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  padding: 2.4rem;
  text-align: center;

  > h2 {
    margin-bottom: 2.4rem;
  }
`;
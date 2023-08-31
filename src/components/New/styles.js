import styled from "styled-components";

export const Container = styled.a`
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  
  padding: 2.4rem;
  text-align: center;

  > h2 {
    margin-bottom: 2.4rem;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
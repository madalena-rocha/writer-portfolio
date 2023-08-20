import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  position: fixed;
  bottom: 14rem;
  right: 2.8rem;
  z-index: 10;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  @media (min-width: 1024px) {
    right: 12.3rem;
  }
`;
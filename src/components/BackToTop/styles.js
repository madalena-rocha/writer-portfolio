import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  position: absolute;
  bottom: 4.35rem;
  right: 2.8rem;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK};
  padding: 1rem 1.6rem;

  @media (min-width: 1024px) {
    right: 12.3rem;
  }
`;
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 4.35rem;
  right: 2.8rem;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK};
  padding: 1rem 1.6rem;

  cursor: pointer;
  transition: filter 0.2s, transform 0.5s;

  &:hover {
    filter: brightness(0.9);
    transform: scale(1.1);
  }

  @media (min-width: 1024px) {
    right: 12.3rem;
  }
`;
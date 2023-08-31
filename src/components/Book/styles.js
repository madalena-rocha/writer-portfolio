import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.BRAND};
  padding: 2.4rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Image = styled.div`
  text-align: center;
  
  > img {
    width: 20rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div p + p {
    margin-top: 1.6rem;
  }

  > a {
    width: fit-content;
    padding: 1rem 1.6rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK};
    color: ${({ theme }) => theme.COLORS.WHITE};

    transition: filter 0.2s, transform 0.5s;

    &:hover {
      filter: brightness(0.9);
      transform: scale(1.1);
    }
  }
`;
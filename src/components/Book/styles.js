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

  @media (min-width: 1024px) {
    width: calc(50% - 1.6rem);
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
  justify-content: center;
  gap: 2.4rem;

  > div p + p {
    margin-top: 1.6rem;
  }

  > a {
    width: fit-content;
    padding: 1rem 1.6rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
`;
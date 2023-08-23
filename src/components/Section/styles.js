import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.2rem;

  padding: 6.4rem 2.8rem;
  
  > h2 {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2.8rem;
    text-transform: uppercase;
  }

  @media (min-width: 1024px) {
    padding-inline: 12.3rem;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3.2rem;
  }
`;
import styled from "styled-components";

export const Container = styled.section`
  text-align: center;
  padding: 6.4rem 2.8rem;
  
  > h2 {
    font-size: 2.8rem;
    margin-bottom: 3.2rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.4rem;
  }

  @media (min-width: 1024px) {
    padding-inline: 12.3rem;
  }
`;
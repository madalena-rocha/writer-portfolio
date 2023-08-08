import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.8rem 12.3rem;
  background-color: var(--primary-color);

  position: fixed;
  z-index: 9999;

  > h1 {
    color: var(--tertiary-color);
  }
`;

export const Icon = styled.div`
  display: flex;
`;

export const Navigation = styled.nav`
  > ul {
    display: flex;
    gap: 3.2rem;
  }
        
  a::after {
    content: '';
    width: 0%;
    height: 2px;
    background-color: var(--secondary-color);

    position: relative;
    bottom: -2rem;
    left: -0.5rem;

    display: block;

    transition: width 0.2s;
  }

  a:hover::after {
    padding-inline: 0.8rem;
    width: 100%;
  }
`;
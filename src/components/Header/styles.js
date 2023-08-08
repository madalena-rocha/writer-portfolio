import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 10.8rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem 2.8rem;
  background-color: var(--primary-color);

  position: fixed;
  z-index: 9999;

  @media (min-width: 1024px) {
    padding-inline: 12.3rem;
  }
`;

export const Brand = styled.div`
  > h1 {
    color: var(--tertiary-color);
  }
`;

export const Icon = styled.div`
  display: flex;

  > svg {
    position: absolute;
    top: 50%;
    right: 2.8rem;
    transform: translateY(-50%);

    transition: opacity 0.7s ease-out, visibility 0.7s ease-out;

    &:nth-child(1) {
      visibility: ${({ isMenuOpen }) => (isMenuOpen ? "hidden" : "visible")};
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "1")};
    }

    &:nth-child(2) {
      visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
    }
  }
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
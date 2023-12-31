import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 10.8rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;

  padding: 1.6rem 2.8rem;
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK};

  position: fixed;
  z-index: 9999;

  @media (min-width: 1024px) {
    padding-inline: 12.3rem;
  }
`;

export const Brand = styled.div`
  > h1 {
    font-size: 2.8rem;
  }
`;

export const Icon = styled.div`
  display: flex;

  > svg {
    position: absolute;
    top: 50%;
    right: 2.8rem;
    transform: translateY(-50%);

    &.visible {
      visibility: visible;
      opacity: 1;
    }
    
    &.hidden {
      visibility: hidden;
      opacity: 0;
    }

    transition: opacity 0.7s ease-out, visibility 0.7s ease-out;
  }
`;

export const Navigation = styled.nav`
  > ul {
    display: flex;
    gap: 3.2rem;
  }

  a:hover,
  .active {
    font-weight: 700;
  }

  a::after {
    content: '';
    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.COLORS.DARK};

    position: relative;
    bottom: -4.3rem;
    left: -0.5rem;

    display: block;

    transition: width 0.2s;
  }
  
  a:hover::after,
  a.active::after {
    padding-inline: 0.8rem;
    width: 100%;
  }
`;
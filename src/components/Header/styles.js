import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.8rem 12.3rem;

  > div {
    display: flex;
    gap: 4.5rem;
        
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
  }
`;
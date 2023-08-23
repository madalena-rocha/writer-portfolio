import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.DARK};
		-webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.BRAND};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.DARK};
    border-radius: 0.8rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.DARK};
  }

  ul li {
    list-style: none;
  }

  a, li, svg {
    cursor: pointer;
    transition: filter 0.2s, transform 0.5s;
  }

  a:hover, li:hover, svg:hover {
    filter: brightness(0.9);
    transform: scale(1.1);
  }
`;
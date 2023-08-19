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
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
		-webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BRAND};
    border-radius: 0.8rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  ul li {
    list-style: none;
  }

  button {
    background: none;
    border: none;
  }

  button, svg {
    cursor: pointer;
  }

  a, li, button, svg {
    cursor: pointer;
    transition: filter 0.2s, transform 0.5s;
  }

  a:hover, li:hover, button:hover, svg:hover {
    filter: brightness(0.9);
    transform: scale(1.1);
  }
`;
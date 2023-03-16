import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  html,
  body,
  #__next {
    font-family: "Poppins", sans-serif;
    width: 100%;
    background: ${({ theme }) => theme.background};
  }

  button {
    font-family: "Poppins", sans-serif;
  }

  .rodal-close {
    width: 32px;
    height: 32px;
    font-weight: bold;

    &::after,
    &::before {
      height: 4px;
    }
  }

  a {
    text-decoration: none;
  }
`;

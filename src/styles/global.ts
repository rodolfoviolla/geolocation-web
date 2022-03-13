import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.darkWhite};
    -webkit-font-smoothing: antialiased;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, textarea, button {
    font-family: 'League Spartan', sans-serif;
    text-transform: uppercase;
    text-shadow: 1px 1px 0px ${colors.lightGray};
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
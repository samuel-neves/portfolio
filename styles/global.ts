import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  background: '#0B0312',
  color: '#ffffff',
  accentColor: '#14F195',
};

export const Container = styled.div`
  padding: 0 12vw;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'NTR';
    padding: 0;
    margin: 0;
    color: ${theme.color};
  }

  body {
    background-color: ${() => theme.background};
  }

  button {
    border: none;
    background-color: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

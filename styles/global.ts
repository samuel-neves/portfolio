import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  background: '#0B0312',
  color: '#ffffff',
  accentColor: '#14F195',
};

export const Container = styled.div`
  padding: 0 12vw;

  span {
    color: ${props => props.theme.accentColor};
  }
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

  /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px grey;
    border-radius: 12px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.accentColor};
    border-radius: 12px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
        0deg,
        #fff,
        ${theme.accentColor}
      );
  }
`;

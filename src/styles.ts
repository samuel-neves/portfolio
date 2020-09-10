import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    body {
      background: #312e38;
      color: #fff;
      -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    button {
      font-family: Roboto, sans-serif;
      font-size: 16px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: 500;
    }

    button {
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  height: 100%;
  width: 80px;
  position: absolute;
  background-color: #1a191c;
  overflow-x: hidden;

  padding: 10px 8px;

  display: flex;
  flex-direction: column;

  > img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
`;

export const SiteContent = styled.div`
  margin: 10px;
  margin-left: 90px;
`;

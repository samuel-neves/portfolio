import React from 'react';

import logoImg from './assets/personalLogo3.png';

import {
  GlobalStyle,
  Container,
  SidebarContainer,
  SiteContent,
} from './styles';

const App: React.FC = () => (
  <Container>
    <SidebarContainer>
      <img src={logoImg} alt="SN" />
    </SidebarContainer>

    <SiteContent>
      <h1>Hello world</h1>
    </SiteContent>

    <GlobalStyle />
  </Container>
);

export default App;

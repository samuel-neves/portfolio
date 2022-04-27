import React from 'react';

import { Container, HeaderButton, HeaderUnderLine } from './styles';

const Header: React.FC = () => {
  const menuItems = ['About', 'Experience', 'Projects', 'Contact'];

  return (
    <Container>
      {menuItems.map(item => (
        <HeaderButton>
          <h1>{item}</h1>
          <HeaderUnderLine />
        </HeaderButton>
      ))}
    </Container>
  );
};

export default Header;

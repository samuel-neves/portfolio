import React from 'react';

import { Container, HeaderButton } from './styles';

const Header: React.FC = () => {
  const menuItems = ['About', 'Experience', 'Projects', 'Contact'];

  return (
    <Container>
      {menuItems.map(item => (
        <HeaderButton>
          <h1>{item}</h1>
        </HeaderButton>
      ))}
    </Container>
  );
};

export default Header;

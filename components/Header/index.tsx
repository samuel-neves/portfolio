import React from 'react';

import { Container, HeaderButton, HeaderUnderLine } from './styles';

interface HeaderComponentProps {
  scrolled: boolean;
}

export type { HeaderComponentProps };

const Header: React.FC<HeaderComponentProps> = ({ scrolled }) => {
  const menuItems = ['About', 'Experience', 'Projects', 'Contact'];

  return (
    <Container scrolled={scrolled}>
      {menuItems.map(item => (
        <HeaderButton scrolled={scrolled} key={item}>
          <h1>{item}</h1>
          <HeaderUnderLine />
        </HeaderButton>
      ))}
    </Container>
  );
};

export default Header;

import React from 'react';

import { Container, HeaderButton, HeaderUnderLine } from './styles';

interface HeaderComponentProps {
  scrolled: boolean;
}

interface MenuItems {
  [x: string]: string;
}

export type { HeaderComponentProps };

const Header: React.FC<HeaderComponentProps> = ({ scrolled }) => {
  const menuItems: MenuItems = {
    About: '#about',
    Experience: '#experience',
    Projects: '#projects',
    Contact: '#contact',
  };

  return (
    <Container scrolled={scrolled}>
      {Object.keys(menuItems).map((item: string) => (
        <HeaderButton scrolled={scrolled} key={item} href={menuItems[item]}>
          <h1>{item}</h1>
          <HeaderUnderLine />
        </HeaderButton>
      ))}
    </Container>
  );
};

export default Header;

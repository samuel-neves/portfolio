import React from 'react';

import { Container, HeaderButton, HeaderUnderLine } from './styles';

interface HeaderComponentProps {
  scrollY: number;
}

interface MenuItems {
  name: string;
  tag: string;
  minScrollY: number;
  maxScrollY: number;
}

const menuItems: MenuItems[] = [
  {
    name: 'About',
    tag: '#about',
    minScrollY: 680,
    maxScrollY: 2000,
  },
  {
    name: 'Experience',
    tag: '#experience',
    minScrollY: 2001,
    maxScrollY: 2002,
  },
  {
    name: 'Projects',
    tag: '#projects',
    minScrollY: 2003,
    maxScrollY: 2004,
  },
  {
    name: 'Contact',
    tag: '#contact',
    minScrollY: 2005,
    maxScrollY: 2006,
  },
];

const Header: React.FC<HeaderComponentProps> = ({ scrollY }) => {
  return (
    <Container scrolled={!!scrollY}>
      {menuItems.map((item: MenuItems) => (
        <HeaderButton
          scrolled={!!scrollY}
          key={item.tag}
          href={item.tag}
          className={`${
            scrollY < item.maxScrollY && scrollY >= item.minScrollY && 'active'
          }`}
        >
          <h1>{item.name}</h1>
          <HeaderUnderLine />
        </HeaderButton>
      ))}
    </Container>
  );
};

export default Header;

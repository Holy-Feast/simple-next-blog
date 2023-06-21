import React from 'react';
import Link from 'next/link';
import { HeaderContainer, Logo, Nav, NavLink } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Link href="/" passHref>
          <NavLink>Shelly`s</NavLink>
        </Link>
      </Logo>
      <Nav>
        <Link href="/about" passHref>
          <NavLink>About</NavLink>
        </Link>
        <Link href="/blog" passHref>
          <NavLink>Blog</NavLink>
        </Link>
        <Link href="/login" passHref>
          <NavLink>Login</NavLink>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

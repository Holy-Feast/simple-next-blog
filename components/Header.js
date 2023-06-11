import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  margin-top: 10px;
`;

const NavLink = styled.span`
  color: #fff;
  margin-right: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

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

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Nav = styled.nav`
  margin-top: 10px;
`;

export const NavLink = styled.span`
  color: #fff;
  margin-right: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

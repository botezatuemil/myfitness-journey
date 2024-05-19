'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  z-index: 10;
  && * {
    box-sizing: border-box;
  }
  background-color: light-dark(var(--mantine-color-white-4), var(--mantine-color-dark-1));
  border-bottom: rem(1px) solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
`;

export const Header = styled.header`
  z-index: 1;
  li {
    font-size: 14px;
    line-height: 1;
    margin: 0;
  }
`;

export const Nav = styled.nav`
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 1rem;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavLogo = styled(Link)`
  align-items: center;
  display: flex;
  text-decoration: none;
`;

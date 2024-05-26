'use client';

import styled from '@emotion/styled';

export const Navbar = styled.nav`
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-6));
  height: 100%;
  width: rem(300px);
  padding: var(--mantine-spacing-md);
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  border-right: rem(1px) solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
`;

export const Header = styled.div`
  padding: var(--mantine-spacing-md);
  padding-top: 0;
  margin-left: calc(var(--mantine-spacing-md) * -1);
  margin-right: calc(var(--mantine-spacing-md) * -1);
  color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
  border-bottom: rem(1px) solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
`;

export const Footer = styled.div`
  margin-left: calc(var(--mantine-spacing-md) * -1);
  margin-right: calc(var(--mantine-spacing-md) * -1);
  border-top: rem(1px) solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
`;

export const LinksContainer = styled.div`
  padding-top: var(--mantine-spacing-xl);
  padding-bottom: var(--mantine-spacing-xl);
`;

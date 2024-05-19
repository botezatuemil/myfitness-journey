'use client';

import { basePath } from '@/utils/constants';
import { Box, Burger, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { redirect } from 'next/navigation';

import ThemeButton from '../ThemeButton';
import { HeaderWrapper, Header as MantineHeader, Nav, NavList, NavLogo } from './HeaderComponents';

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={120}>
      <HeaderWrapper>
        <MantineHeader>
          <Nav>
            <NavList>
              <NavLogo
                href="/"
                daa-ll="logo"
                className="nav-logo"
                onClick={(e) => {
                  e.preventDefault();
                  redirect(basePath);
                }}
              >
                <MantineLogo size={30} />
              </NavLogo>

              <Group visibleFrom="sm">
                <ThemeButton />
                <Button variant="light">Log in</Button>
                <Button>Sign up</Button>
              </Group>

              <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
            </NavList>
          </Nav>
        </MantineHeader>
      </HeaderWrapper>
    </Box>
  );
}

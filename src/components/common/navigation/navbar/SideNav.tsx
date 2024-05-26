'use client';

import { UserSection } from '@/components/UserSection';
import { ROUTES } from '@/utils/constants';
import { Code, Group, ScrollArea, UnstyledButton, rem } from '@mantine/core';
import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

import { Logo } from './Logo';
import { Footer, Header, LinksContainer, Navbar } from './Navbar.styles';
import { LinksGroup } from './NavbarLinksGroup';

export const SideNav = () => {
  const router = useRouter();
  return (
    <Navbar>
      <Header>
        <Group justify="space-between">
          <UnstyledButton onClick={() => router.replace('/')}>
            <Logo style={{ width: rem(120) }} />
          </UnstyledButton>

          <Code fw={700}>v3.1.2</Code>
        </Group>
      </Header>

      <ScrollArea flex={1}>
        <LinksContainer>
          {ROUTES.map((item) => (
            <LinksGroup {...item} key={item.label} />
          ))}
        </LinksContainer>
      </ScrollArea>

      <Footer>
        <UserSection />
      </Footer>
    </Navbar>
  );
};

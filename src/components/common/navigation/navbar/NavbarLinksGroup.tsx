'use client';

import { useMemo, useState } from 'react';
import React from 'react';

import { Box, Collapse, Group, Text, ThemeIcon, UnstyledButton, rem } from '@mantine/core';
import { IconCalendarStats, IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import styled from 'styled-components';

import classes from './NavbarLinksGroup.module.css';
import { ButtonDrawer, StyledLink } from './NavbarLinksGroup.styles';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  baseLink?: string;
}

const LinkItem = ({ label, link }: { label: string; link: string }) => {
  return <StyledLink href={link}>{label}</StyledLink>;
};

export function LinksGroup({ icon: Icon, label, baseLink, initiallyOpened, links }: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const items = useMemo(
    () =>
      (hasLinks ? links : []).map((linkItem, index) => (
        <LinkItem label={linkItem.label} link={linkItem.link} key={index} />
      )),
    [hasLinks, links]
  );

  return (
    <Box >
      <ButtonDrawer onClick={() => setOpened((o) => !o)}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>

            <Box ml="md">
              {baseLink ? (
                <Link
                  style={{
                    textDecoration: 'none',
                    fontWeight: 500,
                    color: 'light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0))',
                  }}
                  href={baseLink}
                >
                  {label}
                </Link>
              ) : (
                label
              )}
            </Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
                transition: 'transform 200ms ease',
                marginLeft: rem(10),
              }}
            />
          )}
        </Group>
      </ButtonDrawer>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </Box>
  );
}

// export function NavbarLinksGroup() {
//   return (
//     <Box mih={220} p="md">
//       <LinksGroup  />
//     </Box>
//   );
// }

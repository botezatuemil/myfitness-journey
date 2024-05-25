'use client';

import React from 'react';

import heroIllustration from '@/static/assets/images/officeWorkVector.webp';
import { heroFitnessUrl } from '@/utils/constants';
import { Button, Container, Group, List, Overlay, Text, ThemeIcon, Title, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import Image from 'next/image';

import { HeroContainer } from './Hero.styles';

type Props = {};

const HeroFooter = (props: Props) => {
  return (
    <HeroContainer>
      <Container size="lg" style={{ display: "flex", justifyContent: 'space-between' }}>
        <div style={{ maxWidth: rem('680px') }}>
          <Title
            c="light-dark(var(--mantine-color-black), var(--mantine-color-white))"
            style={{ fontSize: rem('44px'), lineHeight: 1.2, fontWeight: 900 }}
          >
            A{' '}
            <span
              style={{
                position: 'relative',
                backgroundColor: 'var(--mantine-color-blue-light)',
                borderRadius: 'var(--mantine-radius-sm)',
                padding: 'rem(4px) rem(12px)',
              }}
            >
              modern
            </span>{' '}
            React <br /> components library
          </Title>
          <Text c="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever – Mantine includes more than 120
            customizable components and hooks to cover you in any situation
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all components and hooks export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you can use Mantine in any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when user navigates with keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md">
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md">
              Source code
            </Button>
          </Group>
        </div>
        <Image src={heroIllustration} alt="man-working" width={400} height={400} />
      </Container>
    </HeroContainer>
  );
};

export default HeroFooter;

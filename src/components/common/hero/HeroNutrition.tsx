'use client';

import React from 'react';

import { heroNutritionUrl } from '@/utils/constants';
import { Button, Container, Overlay, Text, Title, rem } from '@mantine/core';

import { HeroContainer } from './Hero.styles';

type Props = {};

const HeroNutrition = (props: Props) => {
  return (
    <HeroContainer $backgroundUrl={heroNutritionUrl}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container
        size="md"
        style={{
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          height: rem('500px'),
          zIndex: 1,
          position: 'relative',
        }}
      >
        <Title style={{ fontSize: rem('60px'), fontWeight: 900, lineHeight: 1.1, color: 'white' }}>
          A fully featured React components library
        </Title>
        <Text style={{ maxWidth: rem('600px') }} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever - Mantine includes more than 120
          customizable components and hooks to cover you in any situation
        </Text>

        <Button variant="gradient" size="xl" radius="xl" mt="calc(var(--mantine-spacing-xl) * 1.5)">
          Get started
        </Button>
      </Container>
    </HeroContainer>
  );
};

export default HeroNutrition;

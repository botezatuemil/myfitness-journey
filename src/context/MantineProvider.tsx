'use client';

import { useContext } from 'react';
import React from 'react';

import { MantineProvider } from '@mantine/core';

import { ColorSchemeContext } from './ColorSchemeProvider';

export const MantineProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const colorSchemeContext = useContext(ColorSchemeContext);

  return <MantineProvider defaultColorScheme='auto'>{children}</MantineProvider>;
};

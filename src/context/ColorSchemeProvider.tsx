'use client';

import { createContext, useState } from 'react';
import React from 'react';

import { MantineColorScheme, MantineTheme, useMantineColorScheme } from '@mantine/core';

type ColorSchemeContextType = {
  colorScheme: any;
  onChange: (colorScheme: MantineColorScheme) => void;
};

export const ColorSchemeContext = createContext<ColorSchemeContextType>({
  colorScheme: 'light',
  onChange: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

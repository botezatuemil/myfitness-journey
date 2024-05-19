'use client';

import React, { useContext } from 'react';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { MoonIcon, SunIcon } from 'lucide-react';

type Props = {};

const ThemeButton = (props: Props) => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
      title="Toggle color scheme"
    >
      {dark ? <SunIcon style={{ width: 18, height: 18 }} /> : <MoonIcon style={{ width: 18, height: 18 }} />}
    </ActionIcon>
  );
};

export default ThemeButton;

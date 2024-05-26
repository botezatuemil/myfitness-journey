'use client';

import styled from '@emotion/styled';
import { Button, UnstyledButton, UnstyledButtonProps, createPolymorphicComponent } from '@mantine/core';
import Link from 'next/link';

export const _ButtonDrawer = styled(UnstyledButton)`
  font-weight: 500;
  display: block;
  width: 100%;
  padding: var(--mantine-spacing-xs) var(--mantine-spacing-md);
  color: var(--mantine-color-text);
  font-size: var(--mantine-font-size-sm);

  @mixin hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-7));
    color: light-dark(var(--mantine-color-black), var(--mantine-color-dark-0));
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-weight: 500;
  padding: var(--mantine-spacing-xs) var(--mantine-spacing-md);
  padding-left: var(--mantine-spacing-md);
  margin-left: var(--mantine-spacing-xl);
  font-size: var(--mantine-font-size-sm);
  color: light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0));
  border-left: 1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));

  @mixin hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-7));
    color: light-dark(var(--mantine-color-black), var(--mantine-color-dark-0));
  }
`;

export const ButtonDrawer = createPolymorphicComponent<'button', UnstyledButtonProps>(_ButtonDrawer);

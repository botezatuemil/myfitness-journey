'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import styled from '@emotion/styled';
import { Group, Text, UnstyledButton, UnstyledButtonProps, createPolymorphicComponent, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

const _UserButtonSection = styled(UnstyledButton)`
  display: block;
  width: 100%;
  padding: var(--mantine-spacing-md);
  color: light-dark(var(--mantine-color-black), var(--mantine-color-dark-0));

  @mixin hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8));
  }
`;

const UserButtonSection = createPolymorphicComponent<'button', UnstyledButtonProps>(_UserButtonSection);

export const UserSection = () => {
  const { user } = useUser();
  if (!user) return null;

  return (
    <UserButtonSection>
      <Group>
        <UserButton />
        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {user.fullName}
          </Text>

          <Text c="dimmed" size="xs">
            {user.emailAddresses[0].emailAddress}
          </Text>
        </div>

        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UserButtonSection>
  );
};

"use client"
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavbarSimple } from './components/navbar';


export function ResponsiveSizes({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 200, lg: 200 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavbarSimple />
        {/* {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))} */}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
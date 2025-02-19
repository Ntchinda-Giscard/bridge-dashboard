"use client"
import { IconPencil, IconTrash, IconX, IconCheck } from '@tabler/icons-react';
import { ActionIcon, Anchor, Avatar, Badge, Group, Table, Text } from '@mantine/core';
import { Key, ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, ReactPortal } from 'react';

const data = [
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Robert Wolfkisser',
    job: 'Encour',
    date: '20/12/2025',
    email: 'rob_wolf@gmail.com',
    phone: '+44 (452) 886 09 12',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Jill Jailbreaker',
    job: 'Encour',
    date: '20/12/2025',
    email: 'jj@breaker.com',
    phone: '+44 (934) 777 12 76',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    name: 'Henry Silkeater',
    job: 'Effectuer',
    date: '20/12/2025',
    email: 'henry@silkeater.io',
    phone: '+44 (901) 384 88 34',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Bill Horsefighter',
    job: 'Effectuer',
    date: '20/12/2025',
    email: 'bhorsefighter@gmail.com',
    phone: '+44 (667) 341 45 22',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    job: 'Rejeter',
    date: '20/12/2025',
    email: 'jeremy@foot.dev',
    phone: '+44 (881) 245 65 65',
  },
];

const jobColors: Record<string, string> = {
  encour: 'blue',
  effectuer: 'cyan',
  rejeter: 'pink',
};

export function DemandTable({onDelete, onEdit, onCancel, onCheck, datas}: any) {
  const rows = datas.map((item: { name: Key | null | undefined; avatar: string | null | undefined; user: {
    telephone: ReactNode;
    email: ReactNode; nom: any; prenom: any; 
}; request_status: { status_name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | null | undefined; }; request_date: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; email: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; telephone: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; service: { service_name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }; }) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
          <Text fz="sm" fw={500}>
            { `${item?.user?.nom} ${item?.user?.prenom}` }
          </Text>
        </Group>
      </Table.Td>

      <Table.Td>
        <Badge color={
          //@ts-ignore
          jobColors[item?.request_status?.status_name?.toLowerCase()]
          } variant="light">
          {item?.request_status?.status_name}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item?.request_date}</Text>
      </Table.Td>
      <Table.Td>
        <Anchor component="button" size="sm">
          {item?.user?.email}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item?.user?.telephone}</Text>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item?.service?.service_name}</Text>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            <IconPencil size={16} stroke={1.5} />
          </ActionIcon>
          <ActionIcon onClick={() => onCheck(item)} variant="subtle" color="blue">
            <IconCheck size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon onClick={() => onCancel(item)} variant="subtle" color="red">
            <IconX size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon onClick={() => onDelete(item)} variant="subtle" color="red">
            <IconTrash size={16} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Demandeur</Table.Th>
            <Table.Th>Statut</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Phone</Table.Th>
            <Table.Th>Demande</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
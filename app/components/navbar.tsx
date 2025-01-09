import { useState } from 'react';
import {
  Icon2fa,
  IconUsers,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconFileStack,
  IconUsersGroup,
  IconDashboard,
} from '@tabler/icons-react';
import { Code, Group } from '@mantine/core';
import Link from 'next/link';
import {useRouter} from 'next/navigation'

import classes from './NavbarSimple.module.css';

const data = [
  { link: '/dashboard/users', label: 'Tableau de bord', icon: IconDashboard },
  { link: '', label: 'Gestion demandes', icon: IconFileStack },
  { link: '', label: 'Gestion utilisatuer', icon: IconUsers },
  { link: '', label: 'Gestion partenaires', icon: IconUsersGroup },
];

export function NavbarSimple() {
  const [active, setActive] = useState('Billing');
  const router = useRouter();

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        // event.preventDefault();
        router.push(item.link);
        setActive(item.label);
      }}
    >
      <item.icon 
      className={classes.linkIcon} 
      stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav 
    className={"classes.navbar"}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
            <p className={classes.gradientText} > THE BRIDGE </p>
          <Code fw={700}>v3.1.2</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        {/* <Link href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </Link> */}

        <Link href="#" className={classes.link} 
          // onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
}

import * as React from 'react';
import { LayoutProps } from '~/models/common';
import Link from 'next/link';
import { Auth } from '../common/index';
import { useAuth } from '~/hooks/use-auth';
import { useRouter } from 'next/router';

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();
  const router = useRouter();

  async function handleLogoutClick() {
    await logout();
    router.push('/login');
  }

  return (
    <Auth>
      <h2>Admin Layout</h2>
      <h3>Left Sidebar</h3>
      <h4>Profile: {JSON.stringify(profile)}</h4>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>About</a>
      </Link>
      <button onClick={handleLogoutClick}>Logout</button>
      <div>{children}</div>
    </Auth>
  );
}

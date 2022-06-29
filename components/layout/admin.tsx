import * as React from 'react';
import { LayoutProps } from '~/models/common';
import Link from 'next/link';

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h2>Admin Layout</h2>
      <h3>Left Sidebar</h3>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </div>
  );
}

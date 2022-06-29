import * as React from 'react';
import { LayoutProps } from '~/models/common';
import Link from 'next/link';

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <h2>Main Layout</h2>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </div>
  );
}

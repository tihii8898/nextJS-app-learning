import * as React from 'react';
import { LayoutProps } from '~/models/common';
import Link from 'next/link';

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <div>
      <h2>Empty Layout</h2>

      <div>{children}</div>
    </div>
  );
}

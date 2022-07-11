import { useRouter } from 'next/router';
import * as React from 'react';
import { useAuth } from '~/hooks/use-auth';
import { useEffect } from 'react';

export interface AuthProps {
  children: any;
}

export default function Auth({ children }: AuthProps) {
  const { profile, firstLoading }: any = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!firstLoading && !profile?.username) router.push('/login');
  }, [router, profile, firstLoading]);

  if (!profile?.username) return <p>Loading... </p>;
  return <div>{children}</div>;
}

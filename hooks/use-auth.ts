import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import { authApi } from '../api-client';

export function useAuth(options?: Partial<PublicConfiguration>) {
  //profile

  const MILLISECOND_PER_MINUTES = 60 * 1000;
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: MILLISECOND_PER_MINUTES, // 1 minute
    revalidateOnFocus: false,
    ...options,
  });

  async function login() {
    await authApi.login({
      username: 'TiHii',
      password: '123122',
    });

    await mutate();
  }

  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }

  const firstLoading = profile === undefined && error === undefined;

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}

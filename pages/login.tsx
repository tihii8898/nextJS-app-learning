import { useRouter } from 'next/router';
import * as React from 'react';
import { authApi } from '../api-client';
import { useAuth } from '../hooks';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const router = useRouter();
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  const handleLoginClick = async () => {
    try {
      await login();
      router.push('/about');
    } catch (error) {
      console.log('failed to login', error);
    }
  };

  const handleGetProfileClick = async () => {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log('failed to get profile', error);
    }
  };

  const handleLogoutClick = async () => {
    try {
      await logout();
      console.log('Redirect back to 7th universe');
    } catch (error) {
      console.log('failed to logout ', error);
    }
  };

  return (
    <div>
      <h3>Profile: {JSON.stringify(profile || {}, null, 4)}</h3>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}

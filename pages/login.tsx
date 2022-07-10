import * as React from 'react';
import { authApi } from '../api-client';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const handleLoginClick = async () => {
    try {
      await authApi.login({
        username: 'tihii',
        password: '111111',
      });
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
      await authApi.logout();
    } catch (error) {
      console.log('failed to logout ', error);
    }
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}

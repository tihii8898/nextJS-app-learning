import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '~/hooks/use-auth';
import { LayoutProps } from '~/models/common';
import { Auth } from '../common';

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

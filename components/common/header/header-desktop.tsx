import { Container, Link as MuiLink, Stack } from '@mui/material';
import { Box } from '@mui/system';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTE_LIST } from './routes';

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
  const router = useRouter();
  return (
    <Box display={{ xs: 'none', lg: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} href={route.path} passHref>
              <MuiLink className={clsx({ active: router.pathname === route.path })}>
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

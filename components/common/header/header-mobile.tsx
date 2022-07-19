import MenuIcon from '@mui/icons-material/Menu';
import { Box, Stack, Link as MuiLink, Button, SwipeableDrawer } from '@mui/material';
import { Container } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { ROUTE_LIST } from './routes';

export interface HeaderMobileProps {}

export function HeaderMobile(props: HeaderMobileProps) {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (bool: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(bool);
  };

  return (
    <Box display={{ xs: 'block', lg: 'none' }} py={2}>
      <Container>
        <Stack direction="column" alignItems="flex-end">
          <Button variant="outlined" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor="right"
            onClose={toggleDrawer(false)}
            open={state}
            onOpen={toggleDrawer(true)}
          >
            {ROUTE_LIST.map((route) => (
              <Link href={route.path} key={route.path} passHref>
                <MuiLink>{route.label}</MuiLink>
              </Link>
            ))}
          </SwipeableDrawer>
        </Stack>
      </Container>
    </Box>
  );
}

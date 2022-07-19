import { Container, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { LayoutProps } from '~/models/common';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        <Container maxWidth="sm" sx={{ bgcolor: 'primary.main' }}>
          SM Container
        </Container>
        <Container sx={{ bgcolor: 'primary.main' }}>MD Container</Container>
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}

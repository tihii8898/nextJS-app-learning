import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { Hero } from '~/components/home';
import { MainLayout } from '~/components/layout';
import { NextPageWithLayout } from '../models';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Hero />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;

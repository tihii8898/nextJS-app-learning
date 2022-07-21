import { Box } from '@mui/material';
import { Hero } from '~/components/home';
import { RecentPosts } from '~/components/home/recent-posts';
import { MainLayout } from '~/components/layout';
import { NextPageWithLayout } from '../models';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Hero />
      <RecentPosts />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;

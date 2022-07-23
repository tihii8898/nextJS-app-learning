import { Box } from '@mui/material';
import { Seo } from '~/components/common';
import { FeaturedWork, Hero, RecentPosts } from '~/components/home';

import { MainLayout } from '~/components/layout';
import { NextPageWithLayout } from '../models';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: 'Portfolio by NextJS | TiHii NguYen',
          thumbnail: '',
          url: 'https://next-js-app-learning.vercel.app/',
          description: 'This project is a practice for web development by using NextJS. ',
        }}
      />
      <Hero />
      <RecentPosts />
      <FeaturedWork />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;

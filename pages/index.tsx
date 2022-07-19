import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { MainLayout } from '~/components/layout';
import { NextPageWithLayout } from '../models';

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  const goToPostDetailPage = () => {
    // router.push('/posts')
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: 18112,
        ref: 'social',
      },
    });
  };

  return <Box>home page</Box>;
};

Home.Layout = MainLayout;

export default Home;

import * as React from 'react';
import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';
import { AdminLayout, MainLayout } from '~/components/layout';
import { Box, Typography } from '@mui/material';

const Header = dynamic(() => import('~/components/common/Header'), { ssr: false });

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  // const router = useRouter();
  // const [postList, setPostList] = React.useState([]);
  // const page = router.query?.page;

  // React.useEffect(() => {
  //   if (!page) return;
  //   (async () => {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  //     const data = await response.json();

  //     setPostList(data);
  //   })();
  // }, [page]);

  // const handleNextButton = () => {
  //   router.push(
  //     {
  //       pathname: '/about',
  //       query: {
  //         page: Number(page || 1) + 1,
  //       },
  //     },
  //     undefined,
  //     { shallow: true }
  //   );
  // };

  // const post = postList.filter((post: any) => post.id == page);

  return (
    <Box>
      <Typography
        component="h1"
        variant="h3"
        color="secondary"
        sx={{
          fontWeight: 'bold',
        }}
      >
        About Page
      </Typography>

      <Header />
    </Box>
  );
}

AboutPage.Layout = AdminLayout;

// export async function getStaticProps() {
//   console.log('Get static Props');

//   return {
//     props: {},
//   };
// }

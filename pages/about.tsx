import * as React from 'react';
import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';
import { MainLayout } from '~/components/layout';

const Header = dynamic(() => import('~/components/common/Header'), { ssr: false });

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();
  const [postList, setPostList] = React.useState([]);
  const page = router.query?.page;

  React.useEffect(() => {
    if (!page) return;
    (async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      const data = await response.json();

      setPostList(data);
    })();
  }, [page]);

  const handleNextButton = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: Number(page || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const post = postList.filter((post: any) => post.id == page);

  return (
    <div>
      <h2>This is About Page</h2>
      <Header />
      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button type="submit" onClick={handleNextButton}>
        Next
      </button>
    </div>
  );
}

AboutPage.Layout = MainLayout;

export async function getStaticProps() {
  console.log('Get static Props');

  return {
    props: {},
  };
}

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

export default function PostDetailPage({ post }: PostDetailProps) {
  const router = useRouter();
  return (
    <div>
      <h4>This is Post Detail Page</h4>

      <q>{post.title}</q>
    </div>
  );
}
//! cái này thì chạy với số lần = số lượng params lấy được từ cái ở dưới !
export const getStaticProps: GetStaticProps<PostDetailProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('\nGET STATIC PROPS', context.params?.postId);
  const postId = context.params?.postId;

  if (!postId) return { notFound: true };

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await response.json();

  return {
    props: {
      post: data,
    },
    revalidate: 6,
  };
};
// ! Cái này chạy 1 lần thôi để truyền params vào cái props ở trên để nó chạy bằng số lượng params được truyền vào
export const getStaticPaths: GetStaticPaths = async () => {
  console.log('GET STATIC PATHS');

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    paths: data.map((post: any) => ({ params: { postId: post.id.toString() } })),
    fallback: false,
  };
};

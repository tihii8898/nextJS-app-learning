import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';
import Link from 'next/link';
export interface PostListProps {
  posts: Post[];
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// export async function getStaticProps() {
//   const request = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const posts = await request.json()

//   return {
//     props:{
//       posts,
//     },
//   }
// }

export const getStaticProps: GetStaticProps<PostListProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};

export default function PostList(props: PostListProps) {
  return (
    <div>
      <h2>This is PostList Page</h2>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a> {post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

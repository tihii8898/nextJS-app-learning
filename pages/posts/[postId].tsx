import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailProps {
}

export default function PostDetailPage (props: PostDetailProps) {
  const router = useRouter();


  return (
    <div>
      <h4>This is Post Detail Page</h4>

      <q>Query: {JSON.stringify(router.query)}</q>
    </div>
  );
}

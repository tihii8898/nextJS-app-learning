import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsPageProps {
}

export default function ParamsPage (props: ParamsPageProps) {
  const router = useRouter();


  return (
    <div>
      <h4>Params Page</h4>

      <q>Query: {JSON.stringify(router.query)}</q>
    </div>
  );
}

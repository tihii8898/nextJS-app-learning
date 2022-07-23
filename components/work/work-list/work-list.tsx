import { Box, Divider } from '@mui/material';
import { Fragment } from 'react';
import { Work } from '~/models';
import { WorkCard } from './work-card';

export interface WorkListProps {
  workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider
            sx={{
              marginY: 2,
            }}
          />
        </Fragment>
      ))}
    </Box>
  );
}

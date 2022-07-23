import { Box, Chip, Stack, Typography } from '@mui/material';
import {} from '@mui/system';
import Image from 'next/image';
import { Work } from '~/models';

export interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      spacing={2}
    >
      <Box width={{ xs: '100%', md: '246px' }} flexShrink={0} alignSelf="center">
        <Image
          src={work.imageUrl}
          width={246}
          height={184}
          layout="responsive"
          alt="thumbnail"
          priority
        />
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
          }}
        >
          {work.title}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginY: 2,
          }}
        >
          <Chip
            label={work.createdAt}
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: 'secondary.dark',
              color: 'white',
            }}
          />
          <Typography color="GrayText">{work.tagList.join(', ')}</Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}

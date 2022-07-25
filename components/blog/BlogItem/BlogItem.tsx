import { Box, Divider, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
import Link from 'next/link';
import { Blog } from '~/models/blog';

export interface BlogItemProps {
  blog: Blog;
}

export function BlogItem({ blog }: BlogItemProps) {
  return (
    <Box>
      <Link href={`/blog/${blog.slug}`} passHref>
        <a>
          <Typography component="h4" variant="h5" fontWeight="bold">
            {blog.title}
          </Typography>
        </a>
      </Link>
      <Stack direction="row" spacing={3} my={2}>
        <Typography>{format(new Date(blog.publishedDate), 'dd MMM yyyy')}</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography color="GrayText">{blog.tagList.join(', ')}</Typography>
      </Stack>
      <Typography variant="body1">{blog.description}</Typography>
    </Box>
  );
}

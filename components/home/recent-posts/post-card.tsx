import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
import { Post } from '~/models';

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  if (!post) return null;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>

        <Stack direction="row" my={2}>
          <Typography variant="subtitle2">
            {format(Number(post.publishedDate), 'dd MMM yyyy')}
          </Typography>
          <Divider
            flexItem
            orientation="vertical"
            sx={{
              mx: 2,
            }}
          />

          <Typography variant="subtitle2">{post.tagList.join(', ')}</Typography>
        </Stack>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}

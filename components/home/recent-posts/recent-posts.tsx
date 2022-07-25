import { Link as MuiLink, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import Link from 'next/link';
import { Post } from '~/models/post';
import { PostCard } from './post-card';

export interface PostsProps {}

export function RecentPosts(props: PostsProps) {
  //fake API
  const postList: Post[] = [
    {
      id: 1,
      slug: '',
      title: 'Making a design system from scratch',
      publishedDate: '1658411530732',
      tagList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: 2,
      slug: '',
      title: 'Creating pixel perfect icons in Figma',
      publishedDate: '1658411530732',
      tagList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ];

  return (
    <Box
      component="section"
      paddingY={2}
      sx={{
        backgroundColor: 'secondary.main',
      }}
    >
      <Container>
        <Stack
          direction="row"
          sx={{
            justifyContent: {
              xs: 'center',
              md: 'space-between',
            },
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">Recent posts</Typography>
          <Link href="/blog" passHref>
            <MuiLink
              color="secondary.light"
              sx={{
                display: {
                  xs: 'none',
                  md: 'inline',
                },
              }}
            >
              View All
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          spacing={2}
          mt={1}
          sx={{
            justifyContent: 'space-between',
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

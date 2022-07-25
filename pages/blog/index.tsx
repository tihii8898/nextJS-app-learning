import { Box, Container, Divider, Typography } from '@mui/material';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { BlogItem } from '~/components/blog';
import { MainLayout } from '~/components/layout';
import { Blog } from '~/models/blog';
import { getBlogList } from '~/utils/blogs';
export interface BlogPageListProps {
  blogs: Blog[];
}

export const getStaticProps: GetStaticProps<BlogPageListProps> = async (
  context: GetStaticPropsContext
) => {
  //convert markdown files into list of javascript object
  const blogList = await getBlogList();
  return {
    props: {
      blogs: blogList,
    },
  };
};

const BlogPage = (props: BlogPageListProps) => {
  return (
    <Box component="section">
      <Container>
        <Typography component="h2" variant="h4" fontWeight="bold" mb={7}>
          Blog
        </Typography>

        <Box
          component="ul"
          sx={{
            listStyleType: 'none',
          }}
        >
          {props.blogs.map((blog) => (
            <li key={blog.id}>
              <BlogItem blog={blog} />

              <Divider
                sx={{
                  marginY: 4,
                }}
              />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

BlogPage.Layout = MainLayout;
export default BlogPage;

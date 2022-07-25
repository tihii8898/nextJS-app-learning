import { Box, Container, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { MainLayout } from '~/components/layout';
import { Blog } from '~/models/blog';
import { getBlogList } from '~/utils/blogs';

export interface BlogDetailProps {
  blog: Blog;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
  if (!blog) return null;
  return (
    <Container>
      <Typography variant="h4" fontWeight="bold">
        {blog.title}
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: blog.htmlContent || '' }}></div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogList = await getBlogList();

  return {
    paths: blogList.map((blog: Blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogDetailProps> = async (
  context: GetStaticPropsContext
) => {
  const blogList = await getBlogList();
  const slug = context.params?.slug;
  if (!slug) return { notFound: true };

  const blog = blogList.find((blog) => blog.slug === slug);
  if (!blog) return { notFound: true };
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: 'Blog detail page' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(blog.mdContent || '');

  blog.htmlContent = file.toString();

  return {
    props: {
      blog: blog,
    },
  };
};

BlogDetail.Layout = MainLayout;

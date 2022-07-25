import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Blog } from '~/models/blog';

const BLOG_FOLDER = path.join(process.cwd(), 'markdown(blog)');

export async function getBlogList(): Promise<Blog[]> {
  const fileNameList = fs.readdirSync(BLOG_FOLDER);
  const blogList: Blog[] = [];

  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, excerpt, content } = matter(fileContents, {
      excerpt_separator: '<!-- truncate-->\n',
    });

    blogList.push({
      id: fileName,
      slug: data.slug,
      title: data.title,
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      publishedDate: data.date,
      tagList: data.tags,
      description: excerpt || '',
      mdContent: content,
    });
  }

  return blogList;
}

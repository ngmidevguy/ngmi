import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostData } from '@/types/post';

const postsDirectory: string = path.join(process.cwd(), 'src', 'posts');

export const getPostSlugs = async (): Promise<string[]> => {
  const posts: string[] = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .filter((file) => !file.startsWith('_'))
    .map((fileName) => path.basename(fileName, '.mdx'));
  return posts
}

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const postFilePath: string = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents: string = fs.readFileSync(postFilePath, 'utf8');

  const { data, content } = matter(fileContents);

  const postData = data as PostData;
  const postContent: string = content;

  return {
    slug,
    content: postContent,
    data: postData,
  } as Post;
}

export const getAllPosts = async (): Promise<Post[]> => {
  const postFiles = await getPostSlugs();
  const posts = await Promise.all(postFiles.map((file) => getPostBySlug(file)));
  return posts;
}


export const getAllPostsByTag = async (tag: string): Promise<Post[]> => {
  const postFiles = await getPostSlugs();
  const posts = await Promise.all(postFiles.map((file) => getPostBySlug(file)));
  return posts.filter((post) => post.data.tags.includes(tag));
}

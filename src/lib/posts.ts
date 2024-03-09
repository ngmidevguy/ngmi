import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export async function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .filter((file) => !file.startsWith('_'))
    .map((fileName) => path.basename(fileName, '.mdx'));
}

export async function getPostBySlug(slug: string) {
  const postFilePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath, 'utf8');

  const { data, content } = matter(fileContents);
  
  return {
    slug,
    content,
    data,
  };
}

export async function getAllPosts() {
  const postFiles = getPostSlugs();
  const posts = await Promise.all(postFiles.map((file) => getPostBySlug(file)));
  return posts;
}

export async function getAllPostsByAuthor(author: string) {
  const postFiles = getPostSlugs();
  const posts = await Promise.all(postFiles.map((file) => getPostBySlug(file)));
  return posts.filter((post) => post.data.author === author);
}

export async function getAllPostsByTag(tag: string) {
  const postFiles = getPostSlugs();
  const posts = await Promise.all(postFiles.map((file) => getPostBySlug(file)));
  return posts.filter((post) => post.data.tags.includes(tag));
}

export async function getAllPostsByCategory(category: string) {
  const postFiles = getPostSlugs();
  const posts = await Promise.all(postFiles.map((file) => getPostBySlug(file)));
  return posts.filter((post) => post.data.category === category);
}
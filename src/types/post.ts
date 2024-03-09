export interface PostData {
  title: string;
  brief: string;
  heroImage: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

export interface Post {
  slug: string;
  content: string;
  data: PostData;
}
// types/blog.ts

export interface BlogBlock {
  type: "paragraph" | "bullet" | "image";
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  date: string;
  readTime: string;
  body: BlogBlock[];
}

export interface BlogContent {
  title: string;
  subtitle?: string;
  posts: BlogPost[];
}

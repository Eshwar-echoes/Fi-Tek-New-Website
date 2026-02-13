import type { BlogPost } from "@/types/blogPost";

export type BlogPageContent = {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
  posts: BlogPost[];
};

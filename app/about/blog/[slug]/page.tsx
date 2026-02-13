import { notFound } from "next/navigation";
import { blogContent } from "@/content/client/fitek/about/posts";
import { BlogPostSection } from "@/components/sections/BlogPostSection";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: Readonly<Props>) {
  const { slug } = await params;

  const post = blogContent.blog.posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return <BlogPostSection post={post} />;
}

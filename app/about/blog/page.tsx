import { BlogGridSection } from "@/components/sections/BlogGridSection";
import { PageHero } from "@/components/sections/PageHero";
import { blogContent } from "@/content/client/fitek/about/posts";

export default function Page() {
  return (
    <>
        <PageHero
                title={blogContent.hero.title}
                subtitle={blogContent.hero.subtitle}
                backgroundImage={blogContent.hero.backgroundImage}
              />
        <BlogGridSection data={blogContent.blog} />   
   </>
    );
}

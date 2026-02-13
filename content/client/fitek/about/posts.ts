import type { BlogContent } from "@/types/blog";

export interface TeamHeroContent {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export interface BlogpageContent {
  hero: TeamHeroContent;
  blog: BlogContent;
}

export const blogContent: BlogpageContent = {
  hero: {
    title: "FiTek Insights & Articles",
    subtitle: "Latest news, updates, and insights from FiTek.",
    backgroundImage: "/media/6.png",
  },
  blog: {
    title: "Insights & Articles",

  posts: [
    {
      id: "post-1",
      slug: "modern-wealth-dashboard-design",
      title: "Designing Modern Wealth Dashboards",
      description: "How to design dashboards advisors actually use.",
      coverImage: "/media/1.png",
      date: "Aug 12, 2026",
      readTime: "5 min read",

      body: [
        {
          type: "paragraph",
          content:
            "Modern dashboards must prioritize clarity, performance, and actionable insights.",
        },

        {
          type: "bullet",
          items: [
            "Fast loading",
            "Role-based views",
            "Mobile responsive",
            "Real-time metrics",
          ],
        },

        {
          type: "image",
          src: "/media/1.png",
          alt: "Dashboard preview",
        },

        {
          type: "paragraph",
          content:
            "When done correctly, dashboards become decision engines instead of reporting tools.",
        },
      ],
    },
  ],
  },
};



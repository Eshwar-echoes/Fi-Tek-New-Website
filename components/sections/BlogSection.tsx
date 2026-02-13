"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/StaggerContainer";
import type { BlogPost } from "@/types/blogPost";

interface BlogSectionProps {
  data: BlogPost[];
}

export function BlogSection({ data }: Readonly<BlogSectionProps>) {
  const [activePost, setActivePost] = useState<BlogPost | null>(
    data?.[0] ?? null
  );
  const [openId, setOpenId] = useState<string | null>(
    data?.[0]?.id ?? null
  );

  if (!data || data.length === 0) return null;

  const toggleAccordion = (post: BlogPost) => {
    setOpenId((prev) => (prev === post.id ? null : post.id));
    setActivePost(post);
  };

  return (
    <SectionReveal>
      <section className="py-20">
        <Container>
          {/* ================= MOBILE â€“ ACCORDION ================= */}
          <StaggerContainer className="md:hidden space-y-4">
            {data.map((post) => {
              const isOpen = openId === post.id;

              return (
                <StaggerItem key={post.id}>
                  <div className="rounded-xl border border-(--border-subtle) bg-(--surface-base)">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(post)}
                      className="w-full flex items-start justify-between p-4 text-left"
                    >
                      <div>
                        <h4 className="font-medium text-(--text-primary)">
                          {post.title}
                        </h4>
                        <p className="mt-1 text-sm text-(--text-muted) line-clamp-1">
                          {post.excerpt}
                        </p>
                      </div>

                      <span
                        className={`ml-4 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        â–¾
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-(--border-subtle)">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-48 w-full object-cover"
                        />
                        <div className="p-4">
                          <p className="text-xs uppercase text-(--text-muted)">
                            {post.category} Â· {post.date}
                          </p>
                          <p className="mt-3 text-(--text-secondary)">
                            {post.content}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* ================= TABLET + DESKTOP ================= */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-[3.6fr_4.4fr] gap-10">
            {/* LEFT â€“ CARD LIST */}
            <aside
              className="
                overflow-y-auto pr-3
                md:h-105
                lg:h-[calc(100vh-220px)]
              "
            >
              <StaggerContainer className="space-y-4">
                {data.map((post) => (
                  <StaggerItem key={post.id}>
                    <button
                      type="button"
                      onClick={() => setActivePost(post)}
                      className={`w-full text-left border-b pb-4 transition
                        ${
                          activePost?.id === post.id
                            ? "border-(--brand-primary)"
                            : "border-(--border-subtle)"
                        }
                      `}
                    >
                      <div className="flex flex-col sm:flex-row gap-4 items-start min-h-40">
                        {/* Thumbnail */}
                        <img
                          src={post.image}
                          alt={post.title}
                          className="
                            h-32 w-full sm:h-36 sm:w-44
                            rounded-md object-cover shrink-0
                          "
                        />

                        {/* Text */}
                        <div>
                          <h4 className="text-base font-semibold text-(--text-primary)">
                            {post.title}
                          </h4>

                          <span className="mt-1 block text-xs text-(--text-muted)">
                            {post.date}
                          </span>

                          <p className="mt-1 text-sm text-(--text-secondary) line-clamp-4">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </button>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </aside>

            {/* RIGHT â€“ DETAIL CARD */}
            {activePost && (
              <SectionReveal>
                <article>
                  <div className="rounded-2xl border border-(--border-subtle) overflow-hidden bg-(--surface-base)">
                    <img
                      src={activePost.image}
                      alt={activePost.title}
                      className="h-60 sm:h-70 w-full object-cover"
                    />

                    <div className="p-5 sm:p-6 lg:p-8">
                      <p className="text-xs uppercase text-(--text-muted)">
                        {activePost.category} Â· {activePost.date}
                      </p>

                      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-(--text-primary)">
                        {activePost.title}
                      </h2>

                      <p className="mt-4 text-(--text-secondary)">
                        {activePost.content}
                      </p>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            )}
          </div>
        </Container>
      </section>
    </SectionReveal>
  );
}

"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import type { BlogContent } from "@/types/blog";
import { motion } from "framer-motion";

interface Props {
  data: BlogContent;
}

export function BlogGridSection({ data }: Readonly<Props>) {
  return (
    <section className="py-28 bg-(--surface-base)">
      <Container>
        <div className="space-y-16">

          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold text-(--text-primary)">
              {data.title}
            </h1>

            {data.subtitle && (
              <div className="text-lg text-(--text-secondary) space-y-3">
                {data.subtitle.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.posts.map((post) => (
              <Link key={post.id} href={`/about/blog/${post.slug}`}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="
                    group
                    rounded-2xl
                    border border-(--border-subtle)
                    bg-(--surface-elevated)
                    overflow-hidden
                    h-full
                    flex flex-col
                    transition
                    hover:shadow-lg
                  "
                >
                  {/* Image */}
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="
                        w-full h-full object-cover
                        transition duration-500
                        group-hover:scale-105
                      "
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 space-y-4">

                    <div className="text-xs text-(--text-muted)">
                      {post.date} • {post.readTime}
                    </div>

                    <h3 className="text-lg font-semibold text-(--text-primary)">
                      {post.title}
                    </h3>

                    <p className="text-sm text-(--text-secondary)">
                      {post.description}
                    </p>

                    <div className="mt-auto text-sm font-medium text-(--brand-primary) group-hover:underline">
                      Read more →
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

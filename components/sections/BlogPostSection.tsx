"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import type { BlogPost } from "@/types/blog";

interface Props {
  post: BlogPost;
}

export function BlogPostSection({ post }: Readonly<Props>) {
  return (
    <article className="bg-(--surface-base)">

      {/* ================================================= */}
      {/* HERO (cover becomes hero background) */}
      {/* ================================================= */}

      <section className="relative min-h-[70vh] overflow-hidden">

        {/* Background image */}
        <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Gradient overlay (enterprise look) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

        <Container>
          <div className="relative z-10 flex min-h-[70vh] flex-col justify-end py-16">

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-neutral-300"
            >
              {post.date} • {post.readTime}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="
                mt-4
                max-w-4xl
                text-4xl md:text-6xl
                font-semibold
                text-white
                tracking-tight
              "
            >
              {post.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
                mt-6
                max-w-2xl
                text-lg
                text-neutral-300
              "
            >
              {post.description}
            </motion.p>

          </div>
        </Container>
      </section>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <section className="py-24">
        <Container>
          <div
            className="
              mx-auto
              max-w-3xl
              space-y-8
              text-(--text-secondary)
              leading-relaxed
              text-[17px]
            "
          >

            {post.body.map((block, i) => {
              if (block.type === "paragraph") {
                return <p key={i}>{block.content}</p>;
              }

              if (block.type === "bullet") {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2">
                    {block.items?.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "image") {
                return (
                  <img
                    key={i}
                    src={block.src}
                    alt={block.alt ?? ""}
                    className="rounded-2xl w-full shadow-sm"
                  />
                );
              }

              return null;
            })}

          </div>
        </Container>
      </section>
    </article>
  );
}

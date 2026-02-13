"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { FiTekSlashIcon } from "@/components/icons/FiTekSlashIcon";
import { FiTekLogo } from "@/components/icons/FiTekLogo";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col bg-(--surface-base)">
      {/* HERO BAR (full width) */}
      <div className="w-full bg-(--surface-footer) py-8 h-70 flex items-center">
        <Container>
          <div className="flex justify-center">
            <FiTekLogo size={48} suffix="LLC" />
          </div>
        </Container>
      </div>
      {/* MAIN CONTENT */}
      <div className="flex-1 flex items-center justify-center py-10">
        <Container>
          <div className="flex flex-col items-center text-center max-w-xl mx-auto">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-(--text-primary)"
            >
              {/* <FiTekLogoAnimatedIcon size={200} />
              <FiTekBarsAnimatedIcon size={48} className="mt-4 mx-auto" /> */}
              <FiTekSlashIcon size={48} className="mx-auto" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-3xl md:text-4xl font-semibold text-(--text-primary)">
                Page not found
              </h1>

              <p className="text-(--text-secondary)">
                The page you’re looking for doesn’t exist or may have been moved.
                Let’s get you back on track.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/icons" className="mt-6">
                <Button intent="primary" context="inverse">
                  Back to Home →
                </Button>
              </Link>

              {/* <Link
                href="/contact"
                className="text-sm text-(--text-muted) hover:text-(--text-primary) transition"
              >
                Contact support
              </Link> */}
            </motion.div>

          </div>
        </Container>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Container } from "./Container";
import { brand } from "@/content/global/brand";
import { motion } from "framer-motion";

/**
 * Enterprise Site Header
 *
 * - Supports link / submenu / mega
 * - Submenus are trigger-anchored (compact dropdowns)
 * - Mega menu expands header (full-width)
 * - Hover ownership is correct (no flicker, no stuck menus)
 * - Scroll-based background opacity retained (client requirement)
 */

export function SiteHeader() {
  const [bgOpacity, setBgOpacity] = useState(0);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<number | null>(null);

  /* Client-required scroll-based background transition */
  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setBgOpacity(Math.min(window.scrollY / heroHeight, 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50",
        "transition-[background-color,backdrop-filter] duration-200",
        bgOpacity > 0 ? "backdrop-blur" : ""
      )}
      style={{
        backgroundColor: `rgba(var(--overlay-white-rgb,255,255,255), ${
          bgOpacity * 0.95
        })`,
      }}
    >
      <Container>
        {/* HEADER HOVER BOUNDARY */}
        <div
          className="relative"
          onMouseLeave={() => setActiveMenu(null)}
        >
          {/* =====================
              TOP BAR
             ===================== */}
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src={brand.logo.src}
                alt={brand.logo.alt}
                className="h-10 w-auto"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
  {brand.nav.map((item, idx) => {
    const isOpen = activeMenu === idx;

    const linkClass = clsx(
      "transition-colors",
      bgOpacity > 0.5
        ? "text-(--text-secondary) hover:text-(--text-primary)"
        : "text-(--text-light) hover:text-(--text-inverse)"
    );

    /* SIMPLE LINK */
    if (item.type === "link") {
      return (
        <Link
          key={item.label}
          href={item.href}
          className={linkClass}
          onMouseEnter={() => setActiveMenu(null)}
          onFocus={() => setActiveMenu(null)}
        >
          {item.label}
        </Link>
      );
    }


    /* SUBMENU */
    if (item.type === "submenu") {
      return (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => {
            if (activeMenu !== idx) {
              setActiveMenu(null);
              requestAnimationFrame(() => setActiveMenu(idx));
            }
          }}
        >
          <button
            type="button"
            className={clsx(
              "bg-transparent border-none p-0 cursor-pointer font-medium",
              linkClass
            )}
            aria-haspopup="menu"
            aria-expanded={isOpen}
          >
            {item.label}
          </button>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="
                absolute
                left-1/2
                top-full
                mt-3
                w-64
                -translate-x-1/2
                rounded-xl
                border border-(--border-subtle)
                bg-(--surface-base)
                shadow-md
                z-50
                py-2
                px-2
              "
            >
              <ul className="py-3">
                {item.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block px-2 py-2 text-sm
                                 text-(--text-muted)
                                 hover:text-(--text-primary)
                                 hover:bg-(--surface-muted)
                                 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      );
    }

    /* MEGA MENU */
    if (item.type === "mega") {
      return (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => {
            if (activeMenu !== idx) {
              setActiveMenu(null);
              requestAnimationFrame(() => setActiveMenu(idx));
            }
          }}
        >
          <button
            type="button"
            className={clsx(
              "bg-transparent border-none p-0 cursor-pointer font-medium",
              linkClass
            )}
            aria-haspopup="menu"
            aria-expanded={isOpen}
          >
            {item.label}
          </button>
        </div>
      );
    }

    return null;
  })}
</nav>


            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-(--focus)"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              ☰
            </button>
          </div>

          {/* =====================
              MEGA MENU (FULL WIDTH)
             ===================== */}
          {activeMenu !== null &&
            brand.nav[activeMenu]?.type === "mega" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="border-t border-(--border-subtle) bg-(--surface-base) rounded-xl"
                role="region"
                onMouseEnter={() => setActiveMenu(activeMenu)}
              >
                <div className="mx-auto max-w-7xl px-8 py-8">
                  <div
                    className="
                      grid
                      gap-x-12
                      gap-y-8
                      grid-cols-1
                      sm:grid-cols-2
                      lg:grid-cols-3
                      xl:grid-cols-4
                    "
                  >
                    {brand.nav[activeMenu].sections.map((section) => (
                      <div key={section.title} className="w-full">
                        <div className="mb-3 text-sm font-semibold text-(--text-primary)">
                          {section.title}
                        </div>
                        <ul className="space-y-2">
                          {section.links.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className="block px-2 py-2 text-sm
                                 text-(--text-muted)
                                 hover:text-(--text-primary)
                                 hover:bg-(--surface-muted)
                                 transition-colors"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            )}
        </div>

        {/* =====================
            MOBILE NAV
           ===================== */}
        {mobileOpen && (
          <nav
            className="
              md:hidden
              border-t border-(--border-subtle)
              bg-(--surface-base)
              max-h-[calc(100vh-64px)]
              overflow-y-auto
            "
            aria-label="Mobile navigation"
          >
            <ul className="px-4 py-4 space-y-2">
              {brand.nav.map((item, idx) => {
                const isOpen = activeMobileMenu === idx;

                if (item.type === "link") {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 font-medium"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <button
                      className="
                        w-full text-left px-3 py-2 font-medium
                        flex justify-between items-center
                      "
                      aria-expanded={isOpen}
                      onClick={() =>
                        setActiveMobileMenu(isOpen ? null : idx)
                      }
                    >
                      {item.label}
                      <span>{isOpen ? "–" : "+"}</span>
                    </button>

                    {isOpen && (
                      <div className="mt-2 rounded-xl bg-(--surface-muted) px-3 py-3">
                        {item.type === "submenu" && (
                          <ul className="space-y-2">
                            {item.links.map(link => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="block text-sm text-(--text-muted)"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.type === "mega" &&
                          item.sections.map(section => (
                            <div key={section.title} className="mb-4">
                              <div className="mb-2 text-xs font-semibold uppercase text-(--text-secondary)">
                                {section.title}
                              </div>
                              <ul className="space-y-2">
                                {section.links.map(link => (
                                  <li key={link.label}>
                                    <Link
                                      href={link.href}
                                      className="block text-sm text-(--text-muted)"
                                      onClick={() =>
                                        setMobileOpen(false)
                                      }
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}

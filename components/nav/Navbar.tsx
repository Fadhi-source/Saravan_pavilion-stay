"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream-paper/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        <a
          href="#"
          className="font-serif text-lg font-semibold tracking-wider text-forest-950 transition-colors hover:text-forest-600"
        >
          {site.shortName}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-forest-600"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            className="inline-flex h-9 items-center justify-center rounded-full bg-forest-600 px-5 text-sm font-medium text-cream-paper shadow-md transition-all duration-300 hover:bg-forest-500 active:bg-forest-700"
          >
            Book Now
          </a>
        </nav>

        <button
          className="flex md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-ink/10 bg-cream-paper/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-forest-50 hover:text-forest-700"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-9 items-center justify-center rounded-full bg-forest-600 px-5 text-sm font-medium text-cream-paper shadow-md transition-all duration-300 hover:bg-forest-500 active:bg-forest-700"
              >
                Book Now
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

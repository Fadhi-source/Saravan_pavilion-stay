"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { site, images } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "10%"] : ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative flex h-dvh min-h-[500px] items-center justify-center overflow-hidden md:min-h-[600px]"
    >
      <motion.div
        style={{ y, opacity, willChange: "transform, opacity" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.waterfall})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/70" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.25em] text-cream-paper/70"
        >
          Munnar &middot; Kerala
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-4xl font-semibold leading-tight text-cream-paper md:text-6xl lg:text-7xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-5 max-w-xl font-serif text-lg italic leading-relaxed text-cream-paper/80 md:text-xl"
        >
          &ldquo;{site.tagline}&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#booking"
            className="inline-flex h-12 items-center justify-center rounded-full bg-cream-paper px-8 text-sm font-semibold text-forest-950 shadow-lg transition-all duration-300 hover:bg-cream-dark active:scale-[0.97]"
          >
            Book Your Stay
          </a>
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center rounded-full border-2 border-cream-paper/30 px-8 text-sm font-medium text-cream-paper backdrop-blur-sm transition-all duration-300 hover:border-cream-paper/60 hover:bg-cream-paper/10"
          >
            Explore More
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float-slow text-cream-paper/50"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Droplets, Mountain, TreePine } from "lucide-react";
import { images } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Waterfall() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      id="waterfall"
      className="relative overflow-hidden bg-forest-950"
    >
      {/* Parallax background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${images.waterfall})` }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-950/60 to-forest-950/80" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              title="Your own private waterfall"
              subtitle="Not a postcard — your backyard. The Attukad cascade is a five-minute walk through the forest, and you can hear it from your pillow."
            />
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {[
              {
                icon: Droplets,
                title: "The sound of stillness",
                body: "There is no white noise app that captures this. The waterfall‘s rhythm shifts with the monsoon — from a gentle murmur in January to a thunderous roar in July. Either way, it lulls you to sleep.",
              },
              {
                icon: Mountain,
                title: "Set in the Western Ghats",
                body: "Pallivasal sits at the edge of the Attukad Valley, a UNESCO World Heritage site. Tea estates climb every slope, and the air is scented with cardamom and wet earth.",
              },
              {
                icon: TreePine,
                title: "A walk through the jungle",
                body: "A short, guided nature trail takes you through fern-laden paths and wild coffee plants to the waterfall‘s base. Bring your camera — the mist creates rainbows on sunny mornings.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-cream-paper/10 bg-cream-paper/5 p-8 backdrop-blur-sm">
                  <item.icon className="mb-4 h-8 w-8 text-moss-light" />
                  <h3 className="font-serif text-xl font-semibold text-cream-paper">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-paper/70">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

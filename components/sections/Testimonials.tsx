"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section id="reviews" className="section-padding bg-cream-paper">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            title="What guests say"
            subtitle="The kind of words that keep us going."
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
                <Quote className="mb-3 h-6 w-6 text-moss-light" />
                <p className="flex-1 text-sm leading-relaxed italic text-ink/75">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, r) => (
                    <Star
                      key={r}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

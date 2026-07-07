"use client";

import { Star, ShieldCheck } from "lucide-react";
import { site, images, amenities, highlights } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export function About() {
  return (
    <section id="about" className="section-padding bg-cream-paper">
      <div className="container-narrow">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image collage */}
          <div className="relative overflow-visible">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${images.saravana})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <Reveal className="!overflow-visible">
              <div className="absolute -bottom-4 right-0 aspect-[3/2] w-[55%] overflow-hidden rounded-2xl shadow-xl md:-bottom-6 md:-right-6 md:w-2/3">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${images.atmosphire})` }}
                />
              </div>
            </Reveal>
          </div>

          {/* Content */}
          <div>
            <Reveal delay={0.1}>
              <Badge variant="moss">Since {site.since}</Badge>
              <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug text-forest-950 md:text-3xl">
                A hillside sanctuary on the Attukad Waterfall Road
              </h3>
              <p className="mt-4 leading-relaxed text-ink/70">
                Tucked away in the quiet lap of Pallivasal, {site.name} offers
                more than a room — it offers stillness. Surrounded by sprawling
                tea gardens and the constant whisper of the neighbouring
                waterfall, this homestay is where the mountain air begins to
                heal.
              </p>
              <p className="mt-3 leading-relaxed text-ink/70">
                With no commercial clutter, just a dedicated team led by our
                executive Anbu, every guest feels like the only guest. Meals are
                home-cooked, luggage is carried across the nature trail by hand,
                and the only schedule is the one the forest sets for you.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-forest-50 px-3 py-1.5 text-sm font-medium text-forest-800">
                <Star size={14} className="fill-forest-600 text-forest-600" />
                {site.rating} &middot; {site.ratingSource}
              </div>
              {site.lgbtqFriendly && (
                <div className="flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1.5 text-sm font-medium text-rose-700">
                  <ShieldCheck size={14} />
                  LGBTQ+ Friendly
                </div>
              )}
            </Reveal>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-ink/5 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="font-serif text-3xl font-bold text-forest-700 md:text-4xl">
                  {h.value}
                </div>
                <div className="mt-1 text-sm font-medium text-ink/80">{h.label}</div>
                <div className="text-xs text-ink/50">{h.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Amenities */}
        <Reveal delay={0.2}>
          <div className="mt-20">
            <SectionHeading
              title="Thoughtful amenities"
              subtitle="Everything you need, nothing you don't."
            />
            <div className="flex flex-wrap justify-center gap-3">
              {amenities.map((a) => (
                <Badge key={a} variant="default">
                  {a}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { experiences, images } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const imgMap: Record<string, string> = {
  waterfall: images.waterfall,
  campfire: images.campfire,
  moreDetails: images.moreDetails,
  nearby: images.nearby,
};

export function Experiences() {
  return (
    <section id="experiences" className="section-padding bg-white">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            title="Experiences"
            subtitle="Staying here is not passive. The forest, the chef, the campfire — every evening writes its own story."
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 0.08}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${imgMap[exp.image] ?? images.waterfall})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-serif text-xl font-semibold text-cream-paper md:text-2xl">
                    {exp.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-cream-paper/80">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

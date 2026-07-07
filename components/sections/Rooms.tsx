"use client";

import { Users, BedDouble, Maximize, Check } from "lucide-react";
import { rooms, images } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

const imgMap: Record<string, string> = {
  balcony: images.balcony,
  front: images.front,
  atmosphire: images.atmosphire,
};

export function Rooms() {
  return (
    <section id="rooms" className="section-padding bg-cream-paper">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            title="Rooms & spaces"
            subtitle="Each room is designed to frame the landscape and let the outside in. Placeholder pricing — contact us for current rates and availability."
          />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3">
          {rooms.map((room, i) => (
            <Reveal key={room.id} delay={i * 0.1}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${imgMap[room.image] ?? images.front})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
                  <h3 className="font-serif text-lg font-semibold text-forest-950">
                    {room.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
                    {room.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-ink/60">
                    <span className="flex items-center gap-1">
                      <Users size={14} /> Up to {room.capacity} guests
                    </span>
                    <span className="flex items-center gap-1">
                      <BedDouble size={14} /> {room.bed}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize size={14} /> {room.size}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {room.perks.map((perk) => (
                      <Badge key={perk} variant="earth">
                        <Check size={10} /> {perk}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-ink/5 pt-4">
                    <span className="text-xs text-ink/50">
                      Rate on request
                    </span>
                    <a
                      href={`https://wa.me/919995587444?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20${encodeURIComponent(room.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-forest-600 transition-colors hover:text-forest-500"
                    >
                      Enquire &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

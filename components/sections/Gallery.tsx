"use client";

import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const galleryItems = [
  { src: images.waterfall, alt: "Waterfall" },
  { src: images.nightfront, alt: "Night view of the property" },
  { src: images.front, alt: "Main entrance" },
  { src: images.balcony, alt: "Room balcony" },
  { src: images.atmosphire, alt: "Atmosphere around the property" },
  { src: images.campfire, alt: "Campfire evening" },
  { src: images.saravana, alt: "Property exterior" },
  { src: images.moreDetails, alt: "Detailed view" },
  { src: images.nearby, alt: "Nearby areas" },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setActiveIndex(i), []);
  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : null));
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i + 1) % galleryItems.length : null));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, close, prev, next]);

  return (
    <section id="gallery" className="section-padding bg-cream-paper">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            title="Gallery"
            subtitle="A glimpse into the life at Saravana Pavilion."
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.05}>
              <button
                onClick={() => open(i)}
                className="group aspect-[4/3] w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
              >
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.src})` }}
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20 max-md:top-auto max-md:bottom-4 max-md:right-16"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          <div
            className="max-h-[85vh] max-w-[90vw] rounded-2xl bg-contain bg-center bg-no-repeat shadow-2xl"
            style={{
              width: "auto",
              height: "auto",
              aspectRatio: "auto",
              backgroundImage: `url(${galleryItems[activeIndex].src})`,
              backgroundSize: "contain",
              minWidth: "60vw",
              minHeight: "50vh",
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

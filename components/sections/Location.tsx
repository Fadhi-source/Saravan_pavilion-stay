"use client";

import { MapPin, Navigation, Car, Footprints } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Location() {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <SectionHeading
              title="Getting here"
              subtitle="Just 7–8 km south of Munnar, down a winding road that cuts through tea country."
              align="left"
            />
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-earth-500" />
                <div>
                  <p className="font-medium text-ink">{site.address.full}</p>
                  <p className="mt-1 text-sm text-ink/60">
                    {site.location.distanceFromMunnar}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-earth-500" />
                <div>
                  <p className="font-medium text-ink">How to reach</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">
                    From Munnar town, drive south towards Pallivasal. The last
                    stretch is a nature trail — vehicles cannot reach the door,
                    but our staff will carry your luggage.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Car className="mt-0.5 h-5 w-5 shrink-0 text-earth-500" />
                <div>
                  <p className="font-medium text-ink">Parking</p>
                  <p className="mt-1 text-sm text-ink/60">
                    Parking is available at the trailhead, a short walk from the
                    property.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Footprints className="mt-0.5 h-5 w-5 shrink-0 text-earth-500" />
                <div>
                  <p className="font-medium text-ink">Nearby attractions</p>
                  <p className="mt-1 text-sm text-ink/60">
                    Attukad Waterfall (walking distance), Mattupetty Dam, Echo
                    Point, Tea Museum, Eravikulam National Park.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href={site.location.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-forest-600 transition-colors hover:text-forest-500"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              <iframe
                title="Property location"
                src={site.location.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

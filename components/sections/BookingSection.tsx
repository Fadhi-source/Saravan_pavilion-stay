"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BookingWidget } from "@/components/booking/BookingWidget";

export function BookingSection() {
  return (
    <section id="booking" className="section-padding bg-cream-paper">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            title="Reserve your stay"
            subtitle="Send us your dates and we'll take care of the rest. No payment needed — just a conversation on WhatsApp to confirm."
          />
        </Reveal>

        <BookingWidget />
      </div>
    </section>
  );
}

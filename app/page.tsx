import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Waterfall } from "@/components/sections/Waterfall";
import { Rooms } from "@/components/sections/Rooms";
import { Experiences } from "@/components/sections/Experiences";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingSection } from "@/components/sections/BookingSection";
import { ChatWidget } from "@/components/chatbot/ChatWidget";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Waterfall />
      <Rooms />
      <Experiences />
      <Gallery />
      <Location />
      <Testimonials />
      <BookingSection />
      <ChatWidget />
    </>
  );
}

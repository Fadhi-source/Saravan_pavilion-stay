import { site } from "./site";
import { whatsappUrl } from "./utils";

export function bookingWhatsAppLink(details: {
  name: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  room: string;
}): string {
  const message = [
    `🌟 *New Booking Enquiry — ${site.name}*`,
    ``,
    `👤 Name: ${details.name}`,
    `📅 Check‑in: ${details.checkIn}`,
    `📅 Check‑out: ${details.checkOut}`,
    `👥 Guests: ${details.guests}`,
    `🛏️ Room: ${details.room}`,
    ``,
    `_Sent via the website booking widget._`,
  ].join("\n");

  return whatsappUrl(site.whatsapp, message);
}

export function chatWhatsAppLink(context: string): string {
  const message = [
    `💬 *Chat from Saravana Pavilion website*`,
    ``,
    context,
    ``,
    `_I'd like to speak with a human._`,
  ].join("\n");

  return whatsappUrl(site.whatsapp, message);
}

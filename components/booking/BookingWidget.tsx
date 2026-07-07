"use client";

import { useState, useMemo } from "react";
import { DayPicker } from "react-day-picker";
import { format, differenceInCalendarDays } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Minus, Plus, SendHorizonal } from "lucide-react";
import { rooms } from "@/lib/site";
import { bookingWhatsAppLink } from "@/lib/whatsapp";
import { cn, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  bookingSchema,
  type BookingFormValues,
  type BookingState,
  initialBookingState,
} from "./schema";

export function BookingWidget() {
  const [booking, setBooking] = useState<BookingState>(initialBookingState);
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");

  const nights = useMemo(() => {
    if (!booking.checkIn || !booking.checkOut) return 0;
    return Math.max(1, differenceInCalendarDays(booking.checkOut, booking.checkIn));
  }, [booking.checkIn, booking.checkOut]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", email: "", phone: "", specialRequests: "" },
  });

  const formValues = watch();

  const selectedRoom = rooms.find((r) => r.id === booking.roomId);
  const totalGuests = booking.adults + booking.children;

  const onSubmit = () => {
    const ref = `SP-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
    setReference(ref);
    setSubmitted(true);
  };

  if (submitted) {
    const waLink = bookingWhatsAppLink({
      name: formValues.name,
      checkIn: booking.checkIn ? format(booking.checkIn, "dd MMM yyyy") : "—",
      checkOut: booking.checkOut ? format(booking.checkOut, "dd MMM yyyy") : "—",
      guests: totalGuests,
      room: selectedRoom?.name ?? "Not selected",
    });

    return (
      <Reveal>
        <div className="mx-auto max-w-lg rounded-3xl bg-white p-8 text-center shadow-lg md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-forest-100">
            <Check className="h-8 w-8 text-forest-600" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-forest-950">
            Booking enquiry sent
          </h3>
          <p className="mt-2 text-ink/60">
            Reference <span className="font-mono font-medium text-forest-700">{reference}</span>
          </p>
          <div className="mt-8 space-y-2 text-left text-sm text-ink/70">
            <div className="flex justify-between border-b border-ink/5 pb-2">
              <span>Check-in</span>
              <span className="font-medium text-ink">{booking.checkIn ? formatDate(booking.checkIn) : "—"}</span>
            </div>
            <div className="flex justify-between border-b border-ink/5 pb-2">
              <span>Check-out</span>
              <span className="font-medium text-ink">{booking.checkOut ? formatDate(booking.checkOut) : "—"}</span>
            </div>
            <div className="flex justify-between border-b border-ink/5 pb-2">
              <span>Nights</span>
              <span className="font-medium text-ink">{nights}</span>
            </div>
            <div className="flex justify-between border-b border-ink/5 pb-2">
              <span>Guests</span>
              <span className="font-medium text-ink">{totalGuests}</span>
            </div>
            <div className="flex justify-between border-b border-ink/5 pb-2">
              <span>Room</span>
              <span className="font-medium text-ink">{selectedRoom?.name ?? "—"}</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-ink/50">
            We don&apos;t process payments online. Share this reference on WhatsApp and we&apos;ll confirm your stay.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-moss text-sm font-semibold text-white shadow-md transition-all hover:bg-moss-dark"
          >
            <SendHorizonal size={16} />
            Share on WhatsApp
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setBooking(initialBookingState);
            }}
            className="mt-4 text-sm text-ink/50 underline underline-offset-2 hover:text-ink/80"
          >
            Start a new enquiry
          </button>
        </div>
      </Reveal>
    );
  }

  return (
    <div className="grid gap-10 md:grid-cols-5">
      {/* Form */}
      <div className="space-y-8 md:col-span-3">
        {/* Dates */}
        <fieldset>
          <legend className="mb-4 font-serif text-lg font-semibold text-forest-950">
            Check-in &mdash; Check-out
          </legend>
          <div className="flex justify-center rounded-2xl border border-ink/5 bg-white p-4 shadow-sm">
            <DayPicker
              mode="range"
              selected={
                booking.checkIn && booking.checkOut
                  ? { from: booking.checkIn, to: booking.checkOut }
                  : booking.checkIn
                    ? { from: booking.checkIn, to: booking.checkIn }
                    : undefined
              }
              onSelect={(range) =>
                setBooking((b) => ({
                  ...b,
                  checkIn: range?.from ?? null,
                  checkOut: range?.to ?? null,
                }))
              }
              numberOfMonths={2}
              disabled={{ before: new Date() }}
              showOutsideDays={false}
            />
          </div>
        </fieldset>

        {/* Guests */}
        <fieldset>
          <legend className="mb-4 font-serif text-lg font-semibold text-forest-950">
            Guests
          </legend>
          <div className="flex flex-wrap gap-6">
            {(["adults", "children"] as const).map((type) => (
              <div key={type} className="flex items-center gap-4">
                <span className="min-w-20 text-sm capitalize text-ink/70">{type}</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setBooking((b) => ({
                        ...b,
                        [type]: Math.max(0, b[type] - 1),
                      }))
                    }
                    disabled={booking[type] <= 0}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-forest-600 hover:text-forest-600 disabled:opacity-30"
                    aria-label={`Decrease ${type}`}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="min-w-[2ch] text-center font-medium tabular-nums">
                    {booking[type]}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setBooking((b) => ({
                        ...b,
                        [type]: b[type] + 1,
                      }))
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-forest-600 hover:text-forest-600"
                    aria-label={`Increase ${type}`}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </fieldset>

        {/* Room selection */}
        <fieldset>
          <legend className="mb-4 font-serif text-lg font-semibold text-forest-950">
            Room
          </legend>
          <div className="flex flex-wrap gap-3">
            {rooms.map((room) => (
              <button
                key={room.id}
                type="button"
                onClick={() =>
                  setBooking((b) => ({ ...b, roomId: room.id }))
                }
                className={cn(
                  "rounded-xl border-2 px-4 py-3.5 text-left text-sm transition-all",
                  booking.roomId === room.id
                    ? "border-forest-600 bg-forest-50 text-forest-900"
                    : "border-ink/10 bg-white text-ink/70 hover:border-ink/20"
                )}
              >
                <span className="block font-medium">{room.name}</span>
                <span className="mt-0.5 block text-xs opacity-60">
                  Up to {room.capacity} guests &middot; {room.size}
                </span>
              </button>
            ))}
          </div>
        </fieldset>

        {/* Contact details */}
        <form
          id="booking-form"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink/80">
              Name *
            </label>
            <input
              id="name"
              {...register("name")}
              className={cn(
                "w-full rounded-xl border bg-white px-4 py-3 text-base outline-none transition-colors focus:border-forest-500 focus:ring-2 focus:ring-forest-100 md:text-sm",
                errors.name ? "border-red-400" : "border-ink/10"
              )}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink/80">
              Phone *
            </label>
            <input
              id="phone"
              {...register("phone")}
              className={cn(
                "w-full rounded-xl border bg-white px-4 py-3 text-base outline-none transition-colors focus:border-forest-500 focus:ring-2 focus:ring-forest-100 md:text-sm",
                errors.phone ? "border-red-400" : "border-ink/10"
              )}
              placeholder="+91 98765 43210"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink/80">
              Email <span className="text-ink/40">(optional)</span>
            </label>
            <input
              id="email"
              {...register("email")}
              className={cn(
                "w-full rounded-xl border bg-white px-4 py-3 text-base outline-none transition-colors focus:border-forest-500 focus:ring-2 focus:ring-forest-100 md:text-sm",
                errors.email ? "border-red-400" : "border-ink/10"
              )}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="specialRequests"
              className="mb-1 block text-sm font-medium text-ink/80"
            >
              Special requests <span className="text-ink/40">(optional)</span>
            </label>
            <textarea
              id="specialRequests"
              rows={3}
              {...register("specialRequests")}
              className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-forest-500 focus:ring-2 focus:ring-forest-100 md:text-sm"
              placeholder="Allergies, celebration, early check-in..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Confirm Booking
          </Button>
        </form>
      </div>

      {/* Summary sidebar */}
      <div className="md:col-span-2">
        <div className="sticky top-24 rounded-2xl border border-ink/5 bg-white p-6 shadow-sm">
          <h4 className="font-serif text-lg font-semibold text-forest-950">
            Your stay
          </h4>

          {!booking.checkIn ? (
            <p className="mt-4 text-sm text-ink/40">Select dates to begin.</p>
          ) : (
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-ink/60">Check-in</span>
                <span className="font-medium text-ink">
                  {booking.checkIn ? formatDate(booking.checkIn) : "—"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink/60">Check-out</span>
                <span className="font-medium text-ink">
                  {booking.checkOut ? formatDate(booking.checkOut) : "—"}
                </span>
              </div>
              <div className="flex justify-between border-t border-ink/5 pt-3">
                <span className="text-ink/60">Nights</span>
                <span className="font-medium text-ink">{nights}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink/60">Guests</span>
                <span className="font-medium text-ink">{totalGuests}</span>
              </div>
              {selectedRoom && (
                <div className="flex justify-between">
                  <span className="text-ink/60">Room</span>
                  <span className="font-medium text-ink">{selectedRoom.name}</span>
                </div>
              )}

              {formValues.name && (
                <div className="flex justify-between">
                  <span className="text-ink/60">Name</span>
                  <span className="font-medium text-ink">{formValues.name}</span>
                </div>
              )}

              <div className="mt-4 rounded-xl bg-forest-50 p-4">
                <p className="text-xs text-forest-700">
                  <strong>Rate on request.</strong> Share this enquiry on WhatsApp and
                  we&apos;ll confirm availability and pricing within minutes.
                </p>
              </div>
            </div>
          )}

          {!booking.checkIn && (
            <div className="mt-6 grid grid-cols-2 gap-2 text-center text-xs text-ink/40">
              <div className="rounded-lg bg-ink/5 p-2">
                <div className="font-serif text-lg font-semibold text-forest-600">
                  4.7
                </div>
                Google Rating
              </div>
              <div className="rounded-lg bg-ink/5 p-2">
                <div className="font-serif text-lg font-semibold text-forest-600">
                  {nights || "—"}
                </div>
                Nights
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

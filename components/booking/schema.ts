import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email").or(z.literal("")).optional(),
  phone: z.string().min(8, "Enter a valid phone number"),
  specialRequests: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

export interface BookingState {
  checkIn: Date | null;
  checkOut: Date | null;
  adults: number;
  children: number;
  roomId: string | null;
}

export const initialBookingState: BookingState = {
  checkIn: null,
  checkOut: null,
  adults: 2,
  children: 0,
  roomId: null,
};

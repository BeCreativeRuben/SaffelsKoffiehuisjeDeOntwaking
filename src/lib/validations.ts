import { z } from "zod";

export const bookingRequestSchema = z.object({
  name: z.string().trim().min(2, "Vul je naam in").max(120),
  email: z.string().trim().email("Vul een geldig e-mailadres in").max(200),
  phone: z.string().trim().min(8, "Vul een telefoonnummer in").max(40),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Kies een datum"),
  time: z.string().trim().min(1, "Kies een tijdstip").max(40),
  guests: z.coerce
    .number()
    .int()
    .min(1, "Minstens 1 persoon")
    .max(50, "Maximaal 50 personen (comfortabel ±35)"),
  occasion: z.string().trim().min(2, "Vertel kort de gelegenheid").max(120),
  message: z.string().trim().max(2000).optional().default(""),
});

export type BookingRequestInput = z.infer<typeof bookingRequestSchema>;

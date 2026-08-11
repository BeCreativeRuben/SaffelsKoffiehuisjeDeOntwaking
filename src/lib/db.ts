import { randomUUID } from "crypto";
import { neon } from "@neondatabase/serverless";

export type BookingStatus = "pending" | "approved" | "declined";

export type BookingRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  message: string;
  status: BookingStatus;
  approve_token: string;
  decline_token: string;
  created_at: string;
  decided_at: string | null;
};

function asDateString(value: unknown) {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  return String(value).slice(0, 10);
}

function normalizeBooking(row: Record<string, unknown>): BookingRequest {
  return {
    id: String(row.id),
    name: String(row.name),
    email: String(row.email),
    phone: String(row.phone),
    date: asDateString(row.date),
    time: String(row.time),
    guests: Number(row.guests),
    occasion: String(row.occasion),
    message: String(row.message ?? ""),
    status: row.status as BookingStatus,
    approve_token: String(row.approve_token),
    decline_token: String(row.decline_token),
    created_at: String(row.created_at),
    decided_at: row.decided_at ? String(row.decided_at) : null,
  };
}

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL ontbreekt");
  }
  return neon(url);
}

export async function ensureSchema() {
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS booking_requests (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      date DATE NOT NULL,
      time TEXT NOT NULL,
      guests INTEGER NOT NULL,
      occasion TEXT NOT NULL,
      message TEXT NOT NULL DEFAULT '',
      status TEXT NOT NULL DEFAULT 'pending'
        CHECK (status IN ('pending', 'approved', 'declined')),
      approve_token TEXT NOT NULL UNIQUE,
      decline_token TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      decided_at TIMESTAMPTZ
    )
  `;
}

export async function createBookingRequest(input: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  message: string;
  approveToken: string;
  declineToken: string;
}) {
  const sql = getSql();
  await ensureSchema();
  const id = randomUUID();
  const rows = await sql`
    INSERT INTO booking_requests (
      id, name, email, phone, date, time, guests, occasion, message,
      approve_token, decline_token
    ) VALUES (
      ${id},
      ${input.name},
      ${input.email},
      ${input.phone},
      ${input.date},
      ${input.time},
      ${input.guests},
      ${input.occasion},
      ${input.message},
      ${input.approveToken},
      ${input.declineToken}
    )
    RETURNING *
  `;
  return normalizeBooking(rows[0] as Record<string, unknown>);
}

export async function getBookingByToken(token: string) {
  const sql = getSql();
  await ensureSchema();
  const rows = await sql`
    SELECT * FROM booking_requests
    WHERE approve_token = ${token} OR decline_token = ${token}
    LIMIT 1
  `;
  if (!rows[0]) return null;
  return normalizeBooking(rows[0] as Record<string, unknown>);
}

export async function decideBooking(
  id: string,
  status: "approved" | "declined",
) {
  const sql = getSql();
  const rows = await sql`
    UPDATE booking_requests
    SET status = ${status}, decided_at = NOW()
    WHERE id = ${id} AND status = 'pending'
    RETURNING *
  `;
  if (!rows[0]) return null;
  return normalizeBooking(rows[0] as Record<string, unknown>);
}

import { cookies } from "next/headers";

const SESSION_COOKIE = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24; // 24 hours

function getAdminPassword(): string | null {
  return process.env.ADMIN_PASSWORD || null;
}

function hashToken(password: string): string {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + "__zaffels_salt__");
  let hash = 0;
  for (const byte of data) {
    hash = ((hash << 5) - hash + byte) | 0;
  }
  return Math.abs(hash).toString(36);
}

export function verifyPassword(password: string): boolean {
  const expected = getAdminPassword();
  if (!expected) return false;
  return password === expected;
}

export async function createSession(): Promise<void> {
  const password = getAdminPassword();
  if (!password) return;
  const token = hashToken(password);
  const jar = await cookies();
  jar.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

export async function isAuthenticated(): Promise<boolean> {
  const password = getAdminPassword();
  if (!password) return false;
  const jar = await cookies();
  const session = jar.get(SESSION_COOKIE);
  if (!session) return false;
  return session.value === hashToken(password);
}

export async function destroySession(): Promise<void> {
  const jar = await cookies();
  jar.delete(SESSION_COOKIE);
}

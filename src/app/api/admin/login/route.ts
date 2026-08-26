import { NextResponse } from "next/server";
import { verifyPassword, createSession } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { password } = (await request.json()) as { password?: string };
    if (!password || !verifyPassword(password)) {
      return NextResponse.json(
        { error: "Ongeldig wachtwoord" },
        { status: 401 },
      );
    }
    await createSession();
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Er ging iets mis" },
      { status: 500 },
    );
  }
}

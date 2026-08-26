import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin-auth";
import { getContent, updateContent } from "@/lib/content";

export const runtime = "nodejs";

export async function GET() {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
  }
  try {
    const content = await getContent();
    return NextResponse.json(content);
  } catch {
    return NextResponse.json(
      { error: "Kon inhoud niet laden" },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
  }
  try {
    const body = await request.json();
    const updated = await updateContent(body);
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json(
      { error: "Kon inhoud niet opslaan" },
      { status: 500 },
    );
  }
}
